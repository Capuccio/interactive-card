import { createContext, useContext, useState } from 'react';

export const emptyCardInfo = {
	name: '',
	number_card: '',
	month: '',
	year: '',
	cvv: ''
}

const CardContext = createContext({
	cardInfo: emptyCardInfo,
	setCardInfo: (_value: any) =>  {}
})

const CardProvider = ({ children }: { children: React.ReactNode }) => {
	const [cardInfo, setCardInfo] = useState(emptyCardInfo);

	return (
		<CardContext.Provider value={{ cardInfo, setCardInfo }}>
			{children}
		</CardContext.Provider>
	)
};

export const useCardContext = () => {
	const context = useContext(CardContext);

	if (context === undefined) {
		throw new Error('useCardContext must be used within a CardProvider');
	}

	return context;
}

export default CardProvider;