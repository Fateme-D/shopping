import styles from './Product.module.css';
import { BiTrash } from "react-icons/bi";
import { useEffect } from 'react';

const Product = ({ onChange, onDecrement, onIncrement, onDelete, product}) => {
    console.log("product.js render");
    useEffect(() => {
        console.log("product.js useFffect");
        return () => {
            // Clean-up => timer, interval ....
            console.log("product.js CWUM");
        }
    }, [])
    return (
        <div className={styles.product}>
            <p> product name: {product.title} course </p>
            <p> product price: {product.price} </p> 
            <span className={styles.value} > {product.quantity}</span>
            <input 
                type="text" 
                onChange={onChange} 
                className={styles.input} 
                value={product.title}
            />
            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement} > + </button>
            <button className={`${styles.button} ${product.quantity === 1 && styles.remove}` } onClick={onDecrement} >
                { product.quantity > 1 ? "-" : <BiTrash /> }
            </button>
            <button onClick={onDelete} className={styles.button}> Delete</button>
        </div>
    ); 
}; 
export default Product;



// // import './Product.css';
// import styles from './Product.module.css';
// import { BiTrash } from "react-icons/bi";
// import React, { Component } from 'react';

// class Product extends React.Component {
//     componentWillUnmount() {
//         console.log('Product.js componentWillUnmount');
//     }
//     render() { 
//         console.log( "product.js render")
//         const { onDelete, onIncrement, onChange, onDecrement, product} = this.props;
//         return (
//          <div className={styles.product}>
//             <p> product name: {product.title} course </p>
//             <p> product price: {product.price} </p> 
//             <span className={styles.value} > {product.quantity}</span>
//             <input 
//                 type="text" 
//                 onChange={onChange} 
//                 className={styles.input} 
//                 value={product.title}
//             />
//             <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement} > + </button>
//             <button className={`${styles.button} ${product.quantity === 1 && styles.remove}` } onClick={onDecrement} >
//                 { product.quantity > 1 ? "-" : <BiTrash /> }
//             </button>
//             <button onClick={onDelete} className={styles.button}> Delete</button>
//         </div>
//         )
//     }
// }
// export default Product;


