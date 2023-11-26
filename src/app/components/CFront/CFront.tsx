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
} from "./CFront.styles";

import { useCardContext } from "@/context";

export default function CFront() {
	const { cardInfo } = useCardContext();

	return (
		<CFrontContainer>
			<CFrontTop>
				<CardLogo alt="card logo" src="/card-logo.svg" width={0} height={0} />
			</CFrontTop>
			<CFrontBottom>
				<CFrontBottomNumbersContainer>
					<CFrontBottomNumbers>
						{cardInfo.card.length > 0 ? cardInfo.card : '0000 0000 0000 0000'}
					</CFrontBottomNumbers>
				</CFrontBottomNumbersContainer>
				<CFrontBottomInfo>
					<CFrontBottomName>
						{cardInfo.name.length > 0 ? cardInfo.name : 'Jane Appleseed'}
					</CFrontBottomName>
					<span>
						{cardInfo.month.length > 0 ? cardInfo.month : '00'}/{cardInfo.year.length > 0 ? cardInfo.year : '00'}
					</span>
				</CFrontBottomInfo>
			</CFrontBottom>
		</CFrontContainer>
	)
}
