import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state)

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart(){
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-44 truncate font-bold mt-3 text-gray-700 text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
            className="bg-black text-white border-2 rounded-lg font-bold px-5 py-2"
          >
          {
            cart.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'
          }
          </button>
        </div>
      </div>
    </div>
  );
}
