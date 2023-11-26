"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ButtonType, CButton, CInput, CLabel } from "@/components"
import { CFormContainer } from "./CForm.styles"

import { useCardContext } from "@/context"

export default function CForm() {
	const router = useRouter();
	const { cardInfo, setCardInfo } = useCardContext();
	const [errors, setErrors] = useState({
		name: "",
		card: "",
		month: "",
		year: "",
		code: ""
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = e.target.name;
		let value: string | undefined = e.target.value;

		if (value.length === 0) setErrors((pvSt) => ({ ...pvSt, [name]: "Can't be blank" }));
		else if (name !== "name" && isNaN(value.replace(/\s/g, "") as any)) setErrors((pvSt) => ({ ...pvSt, [name]: "Wrong format, numbers only" }));
		else setErrors((pvSt) => ({ ...pvSt, [name]: "" }));

		if (name === "card") value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();

		setCardInfo((pvSt: any) => ({ ...pvSt, [name]: value }));
	}

	const submitForm = (e: React.FormEvent): void => {
		e.preventDefault();
		const target = e.target as typeof e.target & HTMLFormElement;
		const form = Object.fromEntries(new FormData(target));
		const formJson = JSON.parse(JSON.stringify(form));
		const errorsCopy: any = { ...errors }

		let fieldsEmpty: boolean = false;

		for (const key in errorsCopy) if (errorsCopy[key].length > 0) fieldsEmpty = true;

		for (const key in formJson) {
			if (formJson[key].length === 0) {
				fieldsEmpty = true;
				setErrors((pvSt) => ({ ...pvSt, [key]: "Can't be blank" }));
			}
		}

		if (!fieldsEmpty) router.push("/success", { shallow: true });
	}

	return (
		<CFormContainer onSubmit={submitForm}>
			<div>
				<CLabel>CARDHOLDER NAME</CLabel>
				<CInput name="name" type="text" placeholder="e.g. Jane Appleseed" value={cardInfo.name} onChange={handleChange} maxLength={34} message={errors.name} />
			</div>
			<div>
				<CLabel htmlFor="card">CARD NUMBER</CLabel>
				<CInput name="card" type="text" placeholder="e.g. 1234 5678 9123 0000" value={cardInfo.card} onChange={handleChange} maxLength={19} message={errors.card} />
			</div>
			<div style={{ display: 'flex'}}>
				<div style={{ flex: '1' }}>
					<CLabel>Exp. Date (MM/YY)</CLabel>
					<div style={{ display: 'flex', gap: '10px' }}>
						<CInput style={{ width: '75px' }} name="month" type="text" value={cardInfo.month} placeholder="MM" onChange={handleChange} maxLength={2} message={errors.month} />
						<CInput style={{ width: '75px' }} name="year" type="text" value={cardInfo.year} placeholder="YY" onChange={handleChange} maxLength={2} message={errors.year} />
					</div>
				</div>
				<div>
					<CLabel>CVC</CLabel>
					<CInput style={{ width: '150px' }} name="code" type="text" value={cardInfo.code} placeholder="e.g. 123" onChange={handleChange} maxLength={3} message={errors.code} />
				</div>
			</div>
			<CButton type={ButtonType.SUBMIT}>Confirm</CButton>
		</CFormContainer>
	)
}
