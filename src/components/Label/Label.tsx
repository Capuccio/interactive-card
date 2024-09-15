import { LabelStyled } from "./Label.styles";

interface LabelProps {
  id?: string;
	children: React.ReactNode;
	htmlFor?: string;
}

export default function Label(props: LabelProps) {
	return (
		<LabelStyled id={props.id} htmlFor={props.htmlFor}>{props.children}</LabelStyled>
	)
}
