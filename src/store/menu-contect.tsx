import { createContext, useState } from "react";

const MenuContext = createContext<{
  menu: string[];
  setMenu: (data: string[]) => void;
}>({
  menu: [],
  setMenu: () => {},
});

const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<string[]>([]);
  menu.push("test");
  menu.push("test2");
  setMenu(menu);
  return <MenuContext.Provider value={{ menu, setMenu }}>{children}</MenuContext.Provider>;
};

export { MenuContext, MenuProvider };
