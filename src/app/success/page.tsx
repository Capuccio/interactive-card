"use client"

import Image from "next/image";

import { ButtonType, CButton } from "@/components";

import { MessageContainer, SucessContainer } from "@/features/success/Success.styles";
import { SucessLogic } from '@/features/success/Sucess.logic';

export default function Success() {
  const { continueButton } = SucessLogic();

	return (
		<SucessContainer>
			<Image alt="complete icon" src="/icon-complete.svg" width={82} height={82} />
			<MessageContainer>
				<p>THANK YOU!</p>
				<span>We&apos;ve added your card details</span>
			</MessageContainer>
			<CButton onClick={continueButton} type={ButtonType.BUTTON}>Continue</CButton>
		</SucessContainer>
	)
}
