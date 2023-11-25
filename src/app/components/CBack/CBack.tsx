import { useCardContext } from "@/context";

import { CBackContainer, CBackCvc } from "./CBack.styles";

export default function CBack() {
	const { cardInfo } = useCardContext();

	return (
		<CBackContainer>
			<CBackCvc>
				{cardInfo.code.length > 0 ? cardInfo.code : '000'}
			</CBackCvc>
		</CBackContainer>
	)
}
