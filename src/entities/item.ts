class Item {
  name: string;
  price: number;
  image: string;
  category: string;

  constructor(name: string, price: number, image: string, category: string) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
  }
}

export default Item;
