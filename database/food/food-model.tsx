export type Price = {
	value: number;
	unit: string;
};

export type Food = {
	name: string;
	shopUrl: string;
	price: Price; // per 1kg
	nutrition: Record<string, number>; // per 100g
};
