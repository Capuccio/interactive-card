import { useRouter } from 'next/navigation';
import { cardInfo, useCardContext } from "@/context";

export function SucessLogic() {
  const router = useRouter();
	const { setCard } = useCardContext();

  const continueButton = () => {
    setCard(cardInfo);
    router.push("/");
  };

  return {
    continueButton,
  }
}
