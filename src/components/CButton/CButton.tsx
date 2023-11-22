import { CButtonStyled } from "./CButton.styles";

export enum ButtonType {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}

interface CButtonProps {
	children: React.ReactNode;
	type?: ButtonType;
	callback: () => void;
}

export function CButton({ children, callback, type = ButtonType.BUTTON }: CButtonProps) {
	const handleClick = () => callback();

	return (
		<CButtonStyled onClick={handleClick} type={type}>{children}</CButtonStyled>
	)
}
