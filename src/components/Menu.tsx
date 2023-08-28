import Item from "../entities/item";
import MenuItem from "./MenuItem";

function Menu() {
  const Items: Item[] = [
    new Item("Butter Chicken", 10, "../../src/assets/item1.jpg"),
    new Item("Mixed Pizza", 20, "../../src/assets/item2.jpg"),
    new Item("Fried Chicken", 30, "../../src/assets/item3.jpg"),
    new Item("Triple Burger", 40, "../../src/assets/item4.jpg"),
  ];
  return (
    <div className="w-full pl-20 pr-20">
      <h1 className="font-bold text-5xl text-start mb-10">Menu</h1>
      <div className="grid grid-cols-4 gap-y-20">
        {Items.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
