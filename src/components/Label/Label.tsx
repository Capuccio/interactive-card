import { LabelStyled } from "./CLabel.styles";

interface CLabelProps {
	children: React.ReactNode;
	htmlFor?: string;
}

export default function CLabel(props: CLabelProps) {
	return (
		<LabelStyled htmlFor={props.htmlFor}>{props.children}</LabelStyled>
	)
}
