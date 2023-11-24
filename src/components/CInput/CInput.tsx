import { CInputStyled } from "./CInput.styles";

interface CInputProps {
	type: string;
	placeholder: string;
	name: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	disabled?: boolean;
	pattern?: string;
	title?: string;
	defaultValue?: string;
	labelHidden?: boolean;
	style?: React.CSSProperties;
}

export default function CInput({ type = "text", placeholder, name, style, required }: CInputProps) {
	return (
		<CInputStyled style={style} type={type} name={name} placeholder={placeholder} required={required} />
	)
}
