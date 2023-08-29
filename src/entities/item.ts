class Item {
  name: string;
  price: number;
  image: string;
  type: string;

  constructor(name: string, price: number, image: string, type: string) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.type = type;
  }
}

export default Item;
