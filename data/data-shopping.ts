type ShoppingItem = {
	type: string;
	name: string;
	price: number;
	qty: number;
}

interface ShoppingItemWithId extends ShoppingItem {
	id: number;
};

const shoppingData: ShoppingItemWithId[] = [
	{ type: 'Clothes', name: 'Socks', price: 1.00, qty: 5, id: 421801449988 },
	{ type: 'Clothes', name: 'Trousers', price: 3.90, qty: 2, id: 346859289079 },
	{ type: 'Clothes', name: 'Pajams', price: 4.80, qty: 1, id: 522050190541 },
	{ type: 'Clothes', name: 'Shoes', price: 23.00, qty: 2, id: 983521769712 },
	{ type: 'Music', name: 'David Bowie', price: 11.90, qty: 1, id: 833864689518 },
	{ type: 'Music', name: 'Rolling Stones', price: 8.95, qty: 1, id: 446941704202 },
	{ type: 'Music', name: 'ABBA', price: 9.90, qty: 1, id: 609551649329 },
	{ type: 'Food', name: 'Chips', price: 3.50, qty: 4, id: 206058323583 },
	{ type: 'Food', name: 'Fish', price: 8.75, qty: 2, id: 837318618873 },
	{ type: 'Food', name: 'Beer', price: 2.80, qty: 12, id: 611830716982 },
];

type ShoppingItemsDictionary = {
	[idx: number]: ShoppingItem;
}

const shoppingDataDictionary: ShoppingItemsDictionary = {
	421801449988:
		{ type: 'Clothes', name: 'Socks', price: 1.00, qty: 5 },
	346859289079:
		{ type: 'Clothes', name: 'Trousers', price: 3.90, qty: 2 },
	522050190541:
		{ type: 'Clothes', name: 'Pajams', price: 4.80, qty: 1 },
	983521769712:
		{ type: 'Clothes', name: 'Shoes', price: 23.00, qty: 2 },
	833864689518:
		{ type: 'Music', name: 'David Bowie', price: 11.90, qty: 1 },
	446941704202:
		{ type: 'Music', name: 'Rolling Stones', price: 8.95, qty: 1 },
	609551649329:
		{ type: 'Music', name: 'ABBA', price: 9.90, qty: 1 },
	206058323583:
		{ type: 'Food', name: 'Chips', price: 3.50, qty: 4 },
	837318618873:
		{ type: 'Food', name: 'Fish', price: 8.75, qty: 2 },
	611830716982:
		{ type: 'Food', name: 'Beer', price: 2.80, qty: 12 },
};
