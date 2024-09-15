"use client"

import { createContext, useContext, useState } from 'react';

export const cardInfo = {
	name: '',
	card: '',
	month: '',
	year: '',
	code: ''
}

const CardContext = createContext({
	card: {} as typeof cardInfo,
	setCard: (_value: any) =>  {}
})

export const useCardContext = () => {
	const context = useContext(CardContext);

	if (context === undefined) {
		throw new Error('useCardContext must be used within a CardProvider');
	}

	return context;
}

const CardProvider = ({ children }: { children: React.ReactNode }) => {
	const [card, setCard] = useState(cardInfo);

	return (
		<CardContext.Provider value={{ card, setCard}}>
			{children}
		</CardContext.Provider>
	)
};

export default CardProvider;
