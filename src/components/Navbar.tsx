const Navbar: React.FC<{ last: string }> = (props) => {
  const name: string = "Amr";
  //name = "5";
  //const array: string[] = ["Hi", "4"];
  //console.log(props);

  return (
    <nav>
      Navbar {props.last} - {name}
    </nav>
  );
};

export default Navbar;
