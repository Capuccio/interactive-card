import { kMaxLength } from "buffer";
import { CInputError, CInputStyled } from "./CInput.styles";

interface CInputProps {
	type: string;
	placeholder: string;
	name: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	disabled?: boolean;
	pattern?: string;
	title?: string;
	value?: string;
	defaultValue?: string;
	labelHidden?: boolean;
	maxLength?: number;
	message?: string;
	style?: React.CSSProperties;
}

export default function CInput({ type = "text", message = "", ...props }: CInputProps) {
	return (
		<div>
			<CInputStyled
				style={props.style}
				type={type}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				value={props.value}
				onChange={props.onChange}
				maxLength={props.maxLength}
			/>
			{message.length > 0 && <CInputError>{message}</CInputError>}
		</div>
	)
}
