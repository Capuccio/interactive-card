"use client"

import { ButtonType, CButton, CInput, CLabel } from "@/components"
import { CFormContainer } from "./CForm.styles"
import { useCardContext } from "@/context"
import { validateNumbers } from "@/util"

export default function CForm() {
	const { cardInfo, setCardInfo } = useCardContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = e.target.name;
		let value: string | undefined = e.target.value;

		//if (name !== "name") validateNumbers(value);
		if (name === "card") {
			value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
		}

		setCardInfo((pvSt: any) => ({ ...pvSt, [name]: value }));
	}

	const handleNumberCard = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setCardInfo((pvSt: any) => ({ ...pvSt, [name]: value }));
	}

	return (
		<CFormContainer>
			<div>
				<CLabel>CARDHOLDER NAME</CLabel>
				<CInput name="name" type="text" placeholder="e.g. Jane Appleseed" value={cardInfo.name} onChange={handleChange} maxLength={34} />
			</div>
			<div>
				<CLabel htmlFor="card">CARD NUMBER</CLabel >
				<CInput name="card" type="text" placeholder="e.g. 1234 5678 9123 0000" value={cardInfo.card} onChange={handleChange} maxLength={19} />
			</div>
			<div style={{ display: 'flex'}}>
				<div style={{ flex: '1' }}>
					<CLabel>Exp. Date (MM/YY)</CLabel>
					<div style={{ display: 'flex', gap: '10px' }}>
						<CInput style={{ width: '75px' }} name="month" type="text" placeholder="MM" onChange={handleChange} maxLength={2} />
						<CInput style={{ width: '75px' }} name="year" type="text" placeholder="YY" onChange={handleChange} maxLength={2} />
					</div>
				</div>
				<div>
					<CLabel>CVC</CLabel>
					<CInput style={{ width: '150px' }} name="code" type="text" placeholder="e.g. 123" onChange={handleChange} maxLength={3} />
				</div>
			</div>
			<CButton callback={() => console.log('click')} type={ButtonType.SUBMIT}>Confirm</CButton>
		</CFormContainer>
	)
}
