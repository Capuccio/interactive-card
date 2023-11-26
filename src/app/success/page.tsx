"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

import { ButtonType, CButton } from "@/components";
import { emptyCardInfo, useCardContext } from "@/context";

import { MessageContainer, SucessContainer } from "./Success.styles";

export default function Success() {
	const router = useRouter();
	const { cardInfo, setCardInfo } = useCardContext();

	return (
		<SucessContainer>
			<Image alt="complete icon" src="/icon-complete.svg" width={82} height={82} />
			<MessageContainer>
				<p>THANK YOU!</p>
				<span>We&apos;ve added your card details</span>
			</MessageContainer>
			<CButton onClick={() => {
				setCardInfo(emptyCardInfo);
				router.push("/");
			}} type={ButtonType.BUTTON}>Continue</CButton>
		</SucessContainer>
	)
}
