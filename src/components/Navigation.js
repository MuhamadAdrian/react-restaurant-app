const { NavLink } = require("react-router-dom");

function Navigation() {
  return (
    <header className="flex justify-between items-center w-full fixed top-0 left-0 text-white py-5 px-8">
      <div className="logo">Logo</div>
      <ul className="list-none">
        <li className="inline-block ml-5 my-3">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="inline-block ml-5 my-3">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/food"
          >
            Food
          </NavLink>
        </li>
        <li className="inline-block ml-5 my-3">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/drink"
          >
            Drink
          </NavLink>
        </li>
        <li className="inline-block ml-5 my-3">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/desserts"
          >
            Desserts
          </NavLink>
        </li>
        <li className="inline-block ml-5">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            to="/order"
          >
            My Order
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
