import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cardInfo, useCardContext } from "@/context"

export default function useHomeLogic() {
  const router = useRouter();
	const { setCard } = useCardContext();
	const [errors, setErrors] = useState<typeof cardInfo>(cardInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = e.target.name;
		let value: string | undefined = e.target.value;

		if (value.length === 0) setErrors((pvSt) => ({ ...pvSt, [name]: "Can't be blank" }));
		else if (name !== "name" && isNaN(value.replace(/\s/g, "") as any)) setErrors((pvSt) => ({ ...pvSt, [name]: "Wrong format, numbers only" }));
		else setErrors((pvSt) => ({ ...pvSt, [name]: "" }));

		if (name === "card") value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();

		setCard((pvSt: any) => ({ ...pvSt, [name]: value }));
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

		if (!fieldsEmpty) router.push("/success");
  }

  return {
    cardInfo,
    errors,
    handleChange,
    submitForm
  }
}
