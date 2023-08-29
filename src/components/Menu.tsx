import { useState } from "react";
import Item from "../entities/item";
import MenuItem from "./MenuItem";

const Menu = () => {
  const Items: Item[] = [
    new Item("Butter Chicken", 15, "../../src/assets/item1.jpg", "main"),
    new Item("Mixed Pizza", 19, "../../src/assets/item2.jpg", "main"),
    new Item("Fried Chicken", 29.99, "../../src/assets/item3.jpg", "main"),
    new Item("Triple Burger", 22, "../../src/assets/item4.jpg", "main"),
    new Item("Milkshake", 15, "../../src/assets/item1bev.jpg", "drinks"),
    new Item("Green Macha", 12, "../../src/assets/item2bev.jpg", "drinks"),
    new Item("Pudding", 7, "../../src/assets/dessert1.jpg", "desserts"),
    new Item("Cheese cake", 10, "../../src/assets/dessert2.jpg", "desserts"),
  ];
  const types: string[] = ["main", "desserts", "drinks"];

  const [selectedType, setSelectedType] = useState(0);

  const onSelectType = (index: number) => {
    setSelectedType(index);
    console.log(types[index]);
  };

  return (
    <div className="w-full pl-20 pr-20 mb-20">
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
      <div className="grid grid-cols-4 gap-y-20">
        {Items.map((item) => item.type === types[selectedType] && <MenuItem item={item} key={item.name} />)}
      </div>
    </div>
  );
};

export default Menu;
