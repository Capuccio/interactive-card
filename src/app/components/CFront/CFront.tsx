import Image from "next/image";
import {
	CFrontBottom,
	CFrontBottomInfo,
	CFrontBottomName,
	CFrontBottomNumbers,
	CFrontBottomNumbersContainer,
	CFrontContainer,
	CFrontTop
} from "./CFront.styles";

export default function CFront() {
	return (
		<CFrontContainer>
			<CFrontTop>
				<Image alt="a" src="/card-logo.svg" width={72} height={42} />
			</CFrontTop>
			<CFrontBottom>
				<CFrontBottomNumbersContainer>
					<CFrontBottomNumbers>
						0000
					</CFrontBottomNumbers>
					<CFrontBottomNumbers>
						0000
					</CFrontBottomNumbers>
					<CFrontBottomNumbers>
						0000
					</CFrontBottomNumbers>
					<CFrontBottomNumbers>
						0000
					</CFrontBottomNumbers>
				</CFrontBottomNumbersContainer>
				<CFrontBottomInfo>
					<CFrontBottomName>
						Jane Appleseed
					</CFrontBottomName>
					<span>
						00/00
					</span>
				</CFrontBottomInfo>
			</CFrontBottom>
		</CFrontContainer>
	)
}
