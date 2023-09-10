import { useState } from "react";
import Item from "../entities/item";
import MenuItem from "./MenuItem";
import item1 from "../../src/assets/item1.jpg";
import item2 from "../../src/assets/item2.jpg";
import item3 from "../../src/assets/item3.jpg";
import item4 from "../../src/assets/item4.jpg";
import item1bev from "../../src/assets/item1bev.jpg";
import item2bev from "../../src/assets/item2bev.jpg";
import dessert1 from "../../src/assets/dessert1.jpg";
import dessert2 from "../../src/assets/dessert2.jpg";

const Menu = () => {
  const Items: Item[] = [
    new Item(0, "Butter Chicken", 15.99, item1, "main"),
    new Item(1, "Mixed Pizza", 19.95, item2, "main"),
    new Item(2, "Fried Chicken", 29.99, item3, "main"),
    new Item(3, "Triple Burger", 22.99, item4, "main"),
    new Item(4, "Milkshake", 15.75, item1bev, "drinks"),
    new Item(5, "Green Macha", 12.5, item2bev, "drinks"),
    new Item(6, "Pudding", 7.99, dessert1, "desserts"),
    new Item(7, "Cheese cake", 9.99, dessert2, "desserts"),
  ];
  const types: string[] = ["main", "desserts", "drinks"];

  const [selectedType, setSelectedType] = useState(0);

  const onSelectType = (index: number) => {
    setSelectedType(index);
  };

  return (
    <div className="w-full mb-10 lg:px-20 px-5">
      <h1 className="font-bold text-5xl text-start mb-10">Menu</h1>
      <div className="flex justify-items-start">
        {types.map((type, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 border-2 border-red-500 hover:bg-red-500 rounded-lg mb-5 ${
              selectedType === index ? "bg-red-500" : ""
            }`}
            onClick={() => onSelectType(index)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-20 gap-y-5">
        {Items.map((item, index) => item.type === types[selectedType] && <MenuItem item={item} key={index} />)}
      </div>
    </div>
  );
};

export default Menu;
