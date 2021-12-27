//2. useReducer & useReducer:
import React, { useContext, useReducer} from 'react';
import {productsData} from '../db/products';
import _ from "lodash";
const ProductContext = React.createContext();  //state
const ProductContextDispatcher = React.createContext();  //setSate()

// const initialState = [
//     {title: "React.js" , price: "99 $" , id: 1, quantity: 1 },
//     {title: "Node.js" , price: "88 $" , id: 2 , quantity: 2 },
//     {title: "JavaScript" , price: "77 $" , id: 3 , quantity: 3},
// ];
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":{
            const index = state.findIndex((item) => item.id === action.id );
            const product = { ...state[index] };
            product.quantity++;
            const updatedProducts = [...state];
            updatedProducts[index] = product;
            // setProducts(updatedProducts);
            return updatedProducts;
        }
        case "decrement":{
            const index = state.findIndex((item) => item.id === action.id );
            //clone the selected index and update te quty;
            const product = { ...state[index] };
            if(product.quantity === 1) {
                const filteredProducts = state.filter((p) => p.id !== action.id); 
                // setProducts(filteredProducts);
                return filteredProducts;
            }else {
                //update products
                const updatedProducts = [...state];
                product.quantity-- ;
                updatedProducts[index] = product;
                return updatedProducts;
            }
        }
        case "edit":{
            const index = state.findIndex((item) => item.id === action.id );
            const product = { ...state[index] };
            product.title = action.event.target.value;
            const updatedProducts = [...state];
            updatedProducts[index] = product;
            // setProducts(updatedProducts);
            return updatedProducts;
        }
        case "remove": {
            const filteredProducts = state.filter((p) => p.id !== action.id);
            return filteredProducts;
        }
        case 'filter':{
            // if (action.event.target.value === "") { //means ALL
            //     return productsData;
            // } else {
            //     //NOTE: filter on all productsData any time change/ so not filtered state
            //     console.log( action.event.target.value);
            //     // const updatedProduct = state.filter((p) => 
            //     //     p.availableSizes.indexOf(action.event.target.value) >= 0
            //     // ); //indexOf if find: return index/ not exist in []: return -1
            //     // return updatedProduct;
            //     const updatedProduct = productsData.filter((p) => 
            //         p.availableSizes.indexOf(action.event.target.value) >= 0
            //     );
            //     return updatedProduct;
            // }

            //use react-select library:
            const value = action.selcetedOption.value;
            if (value === "") {
                return productsData;
            } else {
                //NOTE: filter on all productsData any time change/ so not filtered state
                const updatedProducts = productsData.filter((p) => 
                    p.availableSizes.indexOf(value) >= 0
                );
                return updatedProducts;
            }
        }
        case 'sort':{
            const value = action.selcetedOption.value;
            const products = [...state];
            if (value === "lowest") {
                // const sorttedProducts = products.sort((a, b) => {
                //     if (a.price > b.price) {
                //       return 1;
                //     }
                //     if (a.price < b.price) {
                //       return -1;
                //     }
                //     return 0;
                // });
                // return sorttedProducts;

                //USE LODASH LIBRARY FOR SORT:
                return _.orderBy(products, ['price'], ['asc']);
            } else {
                // const sorttedProducts = products.sort((a, b) => {
                //     if (a.price < b.price) {
                //         return 1;
                //       }
                //       if (a.price > b.price) {
                //         return -1;
                //       }
                //       return 0;
                // });
                // return sorttedProducts;

                //USE LODASH LIBRARY FOR SORT:
                return  _.orderBy(products, ['price'], ['desc']);
            }
        }
        case "search":{
            const value = action.event.target.value;
            if (value === "") {
                return state;
            } else {
                //NOTE: filter on all productsData any time change/ so not filtered state
                const filteredProducts = state.filter((p) => 
                   p.title.toLowerCase().includes(value.toLowerCase())
                );
                return filteredProducts;
            }
        }
        default:
            return state; 
    } 
};

const ProductsProvider = ({children }) => {
    const [products, dispatch] = useReducer(reducer, productsData);

    console.log(products)
    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={dispatch}>
               {children }
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    );
} 
export default ProductsProvider;
//custom hook:
export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => useContext(ProductContextDispatcher);
























 

//2. useReducer & useContext:
// import React, { useContext, useState} from 'react';

// const ProductContext = React.createContext();  //state
// const ProductContextDispatcher = React.createContext();  //setSate()


// const ProductsProvider = ({children }) => {
//     const [products, setProducts] = useState([
//         {title: "React.js" , price: "99 $" , id: 1, quantity: 1 },
//         {title: "Node.js" , price: "88 $" , id: 2 , quantity: 2 },
//         {title: "JavaScript" , price: "77 $" , id: 3 , quantity: 3},
//     ]);

//     console.log(products)
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={setProducts}>
//                {children }
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     );
// } 
// export default ProductsProvider;
// //custom hook:
// export const useProducts = () => useContext(ProductContext);
// export const useProductsActions = () => {
//     const setProducts = useContext(ProductContextDispatcher);
//     const products = useContext(ProductContext);

//     const removeHandler = (id) => {
//         console.log('clicked' , id);
//         const filteredProducts = products.filter( (p) => p.id !== id);
//         setProducts(filteredProducts);
//     };

//     const incrementHandler = (id) => {
//         const index = products.findIndex((item) => item.id === id );
//         console.log(index);
//         const product = { ...products[index] };
//         product.quantity++;
//         const updatedProducts = [...products];
//         updatedProducts[index] = product;
//         setProducts(updatedProducts);
//     };
//     const changeHandler = (event, id) => {
//         const index = products.findIndex((item) => item.id === id );
//         console.log(index);
//         const product = { ...products[index] };
//         product.title = event.target.value;
//         const updatedProducts = [...products];
//         updatedProducts[index] = product;
//         setProducts(updatedProducts);
//     };

//     const decrementHandler = (id) => {
//         const index = products.findIndex((item) => item.id === id );
//         console.log(index);
//         //clone the selected index and update te quty;
//         const product = { ...products[index] };
//         if(product.quantity === 1) {
//             const filteredProducts = products.filter( (p) => p.id !== id); 
//             setProducts(filteredProducts);
//         }else {
//             //update products
//             const updatedProducts = [...products];
//             product.quantity-- ;
//             updatedProducts[index] = product;
//             setProducts(updatedProducts);
//         }
//     };

//     return {removeHandler, incrementHandler, changeHandler, decrementHandler};
// };