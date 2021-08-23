interface Products {
	id: string;
	title: string;
	price: number;
	thumbnail: string;
}

export default class Product {
	content: Array<Products>;

	constructor() {
		this.content = [];
	}

	randomId(): string {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	addProduct(title: string, price: number, thumbnail: string): Products {
		const newProduct: Products = {
			title: title,
			price: price,
			thumbnail: thumbnail,
			id: this.randomId(),
		};
		this.content.push(newProduct);
		return newProduct;
	}

	getProducts(): Array<Products> {
		return this.content;
	}

	updateProduct(
		id: string,
		title: string,
		price: number,
		thumbnail: string
	): Products | -1 {
		const arrayPosition: number = this.getProducts()
			.map((product) => product.id)
			.indexOf(id);
		arrayPosition !== -1 &&
			`${(this.content[arrayPosition].title = title)}
		${(this.content[arrayPosition].price = price)}
		${(this.content[arrayPosition].thumbnail = thumbnail)}`;
		return arrayPosition !== -1 ? this.content[arrayPosition] : arrayPosition;
	}

	deleteProduct(id: string): Array<Products> | -1 {
		const arrayPosition: number = this.getProducts()
			.map((product) => product.id)
			.indexOf(id);
		const deletedProduct = this.content.filter((product) => product.id == id);
		arrayPosition !== -1 && this.content.splice(arrayPosition, 1);
		return arrayPosition !== -1 ? deletedProduct : arrayPosition;
	}
}
