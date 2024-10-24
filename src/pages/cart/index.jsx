import useCartStore from "../../store/storeCart";
import CartProduct from "../../components/cartProduct";
import AddToCartButton from "../../components/addCartCreateUrl";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const cartData = cart.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  // console.log(cart);

  return (
    <>
      <div className="flex justify-between p-20 max-[640px]:p-0 max-[640px]:pt-20 max-[640px]:flex-col">
        <div className="flex flex-col gap-1 w-[50%] max-[640px]:w-[100%] max-[640px]:order-3">
          {cart.map((product, index) => (
            <CartProduct key={product.id} product={product} count={index + 1} />
          ))}
        </div>
        <div className="w-[50%] pl-1 flex flex-col gap-1 max-[640px]:w-[100%] max-[640px]:order-1 max-[640px]:p-0 max-[640px]:pb-20 max-[640px]:px-2">
          <div className="flex justify-between">
            TOTAL <div>{getTotalPrice()}.0€</div>
          </div>
          <div className="z-10 flex justify-between">
            SHIPPING <div className="opacity-20">Calculated at checkout</div>
          </div>
          {cart.length <= 0 ? (
            <div className="ml-auto">CART IS EMPTY</div>
          ) : (
            <AddToCartButton items={cartData} />
          )}
        </div>
        <div className="border-b border-black-20 max-[640px]:order-2 mb-5 mx-2 "></div>
      </div>
    </>
  );
}
