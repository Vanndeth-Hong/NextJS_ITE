import AddToCartComponent from "@/components/AddToCartComponent";
import ProductCartComponent from "@/components/ProductCartComponent";


export default function CartPage(){
    return (
        <div>
            <h1>Cart Page</h1>
            <ProductCartComponent/>
            <AddToCartComponent/>
        </div>
    )
}   