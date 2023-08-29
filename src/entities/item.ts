class Item {
  name: string;
  price: number;
  image: string;
  type: string;
  quantity: number = 0;

  constructor(name: string, price: number, image: string, type: string, quantity: number = 0) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.type = type;
    this.quantity = quantity;
  }
}

export default Item;
