import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Products from "./Products";
import "./App.css";

function Menu() {
     const [product, setProduct] = useState(data);

     const filProd = (description) => {
         const newProduct = data.filter(element => element.description === description);
         setProduct(newProduct);
     }
    
    return(
        <div >
            <Buttons filterProduct = {filProd}/>
            <Products prodProps ={product}  />
        </div>
    )
}
export default Menu;

