import { NavLink } from "react-router-dom";
import useCartStore from "../../store/storeCart";

export default function Navbar() {
  const count = useCartStore((state) => state.getCartCount());
  return (
    <div className="flex gap-2 fixed w-[50%] justify-between pr-2 max-[640px]:w-[100%] max-[640px]:bg-white max-[640px]:px-4 max-[640px]:py-4 z-30 ml-1 mt-1 max-[640px]:m-0">
      <NavLink
        className="underline-offset-[3px] decoration-[1.5px] hover:underline active:opacity-70 max-[640px]:hover:no-underline transition-all delay-75 max-[640px]:active:bg-gray-100"
        to="/"
      >
        SCUTIGERA
      </NavLink>
      <NavLink
        className="underline-offset-[3px] decoration-[1.5px] hover:underline active:opacity-70 max-[640px]:hover:no-underline transition-all delay-75 max-[640px]:active:bg-gray-100"
        to="/cart"
      >
        CART({count})
      </NavLink>
    </div>
  );
}
