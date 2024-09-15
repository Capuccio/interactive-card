import { useCardContext } from "@/context";

import { Container, CVC} from "./Back.styles";

export default function CBack() {
	const { card } = useCardContext();

	return (
		<Container>
			<CVC>
				{card.code.length > 0 ? card.code : '000'}
			</CVC>
		</Container>
	)
}
