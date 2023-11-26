import { CButtonStyled } from "./CButton.styles";

export enum ButtonType {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}

interface CButtonProps {
	children: React.ReactNode;
	type?: ButtonType;
	onClick?: () => void;
}

export function CButton({ type = ButtonType.BUTTON, ...props }: CButtonProps) {
	const handleClick = () => props.onClick && props.onClick();

	return (
		<CButtonStyled onClick={handleClick} type={type}>{props.children}</CButtonStyled>
	)
}
