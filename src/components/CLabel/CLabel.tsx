import { CLabelStyled } from "./CLabel.styles";

interface CLabelProps {
	children: React.ReactNode;
	htmlFor?: string;
}

export default function CLabel(props: CLabelProps) {
	return (
		<CLabelStyled htmlFor={props.htmlFor}>{props.children}</CLabelStyled>
	)
}
