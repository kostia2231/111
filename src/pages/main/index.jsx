import Product from "../../components/product";
import { useProducts } from "../../data/getData";
import { useEffect, useRef } from "react";

export default function Main() {
  const { data } = useProducts();
  const products = data?.data.products.edges;

  let isScreamer = useRef(false);
  useEffect(() => {
    if (isScreamer.current === false) {
      console.log(`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠈⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠁⠋⣾⠿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠀⠀⠀⢀⠀⠀⠐⠀⠀⠙⡦⠀⠀⠈⠘⣻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠀⠀⣼⣆⠀⠀⣿⣦⣄⠘⠀⠀⠈⠀⠘⢻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣇⠀⢀⣿⣿⣇⠀⠘⢿⣿⣷⣦⣄⡀⠀⢤⣈⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠀⣾⣿⣿⡿⠀⠀⠈⠻⢿⣿⣿⣿⣷⠄⠐⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡀⠻⣿⠿⠁⠀⠀⠀⠀⠀⢉⠉⠉⠁⠀⣠⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⣀⣀⡀⢸⡿⠷⠶⠄⠀⠉⠉⠉⠙⢙⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡖⠐⠀⠀⠀⠐⢈⢘⠰⠀⡽⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢰⣿⣿⣿⣷⣄⠀⠠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣆⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠹⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢹⣿⣿⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣍⣥⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    `);
      isScreamer.current = true;
    }
  }, []);

  return (
    <div className="flex flex-col gap-1 max-[640px]:mx-4">
      {products?.map((item) => (
        <Product key={item.node.id} item={item.node} />
      ))}
    </div>
  );
}
