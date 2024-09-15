import Image from "next/image";

import {
	CFrontBottom,
	CFrontBottomInfo,
	CFrontBottomName,
	CFrontBottomNumbers,
	CFrontBottomNumbersContainer,
	CFrontContainer,
	CFrontTop,
	CardLogo
} from "./Front.styles";

import { useCardContext } from "@/context";

export default function CFront() {
	const { card } = useCardContext();

	return (
		<CFrontContainer>
			<CFrontTop>
				<CardLogo alt="card logo" src="/card-logo.svg" width={0} height={0} />
			</CFrontTop>
			<CFrontBottom>
				<CFrontBottomNumbersContainer>
					<CFrontBottomNumbers>
						{card.card.length > 0 ? card.card : '0000 0000 0000 0000'}
					</CFrontBottomNumbers>
				</CFrontBottomNumbersContainer>
				<CFrontBottomInfo>
					<CFrontBottomName>
						{card.name.length > 0 ? card.name : 'Jane Appleseed'}
					</CFrontBottomName>
					<span>
						{card.month.length > 0 ? card.month : '00'}/{card.year.length > 0 ? card.year : '00'}
					</span>
				</CFrontBottomInfo>
			</CFrontBottom>
		</CFrontContainer>
	)
}
