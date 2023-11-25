"use client"

import Image from "next/image";

import { ButtonType, CButton } from "@/components";

import { MessageContainer, SucessContainer } from "./Success.styles";

export default function Success() {
	return (
		<SucessContainer>
			<Image alt="complete icon" src="/icon-complete.svg" width={82} height={82} />
			<MessageContainer>
				<p>THANK YOU!</p>
				<span>We&apos;ve added your card details</span>
			</MessageContainer>
			<CButton callback={() => console.log("done")} type={ButtonType.BUTTON}>Continue</CButton>
		</SucessContainer>
	)
}
