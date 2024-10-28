import useCartStore from "../../store/storeCart";
import CartProduct from "../../components/cartProduct";
import AddToCartButton from "../../components/addCartCreateUrl";
import { motion } from "framer-motion";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const cartData = cart.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));

  return (
    <>
      <div className="flex p-20 max-[640px]:p-0 max-[640px]:pt-20 max-[640px]:flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col gap-1 w-[50%] max-[640px]:w-[100%] max-[640px]:order-3"
        >
          {cart.map((product, index) => (
            <CartProduct key={product.id} product={product} count={index + 1} />
          ))}
        </motion.div>
        <div className="w-[50%] pl-1 flex flex-col gap-1 max-[640px]:w-[100%] max-[640px]:order-1 max-[640px]:p-0 max-[640px]:pb-10 max-[640px]:px-4 border-b h-fit pb-10 border-black-20 mb-10">
          <div className="flex justify-between">
            TOTAL <div className="font-bold">{getTotalPrice()}.0€</div>
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
      </div>
    </>
  );
}
