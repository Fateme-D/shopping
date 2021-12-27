//3. Functional componenet & passed state with context & useReducer:
import Product from '../Product/Product';
import { useProducts, useProductsActions } from '../Provider/ProductsProvider';
const ProductList = () => {
    const products = useProducts();
    const dispatch= useProductsActions();

    const renderProduct = () => {
        if (products.length === 0) return <div> There is no product in cart</div>;
        return products.map((product , index) => {
            return (
                <Product 
                    product= {product}
                    key= {index} 
                    onDelete={() => dispatch( { type: "remove", id: product.id}) }
                    onIncrement= {() => dispatch( { type: "increment", id: product.id}) }
                    onDecrement= {() =>  dispatch( { type: "decrement", id: product.id}) }
                    onChange = {(e) => dispatch( { type: "edit", id: product.id, event:e }) }
                />
            );
        });
    }
    return (
        <div>
            { !products.length && <div>go to shopping </div> }   
            {renderProduct()}
        </div>
    );
}
export default ProductList;




















//3. Functional componenet & passed state with context & useState:
// import Product from '../Product/Product';
// import { useProducts, useProductsActions } from '../Provider/ProductsProvider';
// const ProductList = () => {
//     const products = useProducts();
//     const { removeHandler, incrementHandler, changeHandler, decrementHandler} = useProductsActions();

//     const renderProduct = () => {
//         if (products.length === 0) return <div> There is no product in cart</div>;
//         return products.map((product , index) => {
//             return (
//                 <Product 
//                     product= {product}
//                     key= {index} 
//                     onDelete={() => removeHandler(product.id)}
//                     onIncrement= {() => incrementHandler(product.id)} 
//                     onDecrement= {() => decrementHandler(product.id)}
//                     onChange = {(e) => changeHandler(e , product.id)}
//                 />
//             );
//         });
//     }
//     return (
//         <div>
//             { !products.length && <div>go to shopping </div> }   
//             {renderProduct()}
//         </div>
//     );
// }
// export default ProductList;





















//2. class componenet & passed state with props:
// import React, { Component } from 'react';
// import Product from '../Product/Product';

// class ProductList extends Component {
//     componentDidUpdate(prevProps, prevState) {
//         console.log("ProductList.js componentDidUpdate");
//         if(prevProps.products !== this.props.products){
//             //some AJAX call => and gets new data
//         }
//     }

//     renderProduct = () => {
//         //object destructuring:
//         const { onRemove, onIncrement, onChange, onDecrement, products} = this.props;
//         if (products.length === 0) return <div> There is no product in cart</div>;
//         return products.map((product , index) => {
//             return (
//                 <Product 
//                     product= {product}
//                     key= {index} 
//                     onDelete={() => onRemove(product.id)}
//                     onIncrement= {() => onIncrement(product.id)} 
//                     onDecrement= {() => onDecrement(product.id)}
//                     onChange = {(e) => onChange(e , product.id)}
//                 />
//             );
//         });
//     }

//     render() { 
//         const {products} = this.props;
//         return (
//             <div>
//                 {!products.length && <div>go to shopping </div> }   
//                 {this.renderProduct()}
//             </div>
//         );
//     }
// }
// export default ProductList;




















// import React, { Component } from 'react';
// import Product from '../Product/Product';
// class ProductList extends Component {
//     state = {
//         products: [
//             {title: "React.js" , price: "99 $" , id: 1, quantity: 1 },
//             {title: "Node.js" , price: "88 $" , id: 2 , quantity: 2 },
//             {title: "JavaScript" , price: "77 $" , id: 3 , quantity: 3},
//         ],
//     };


//     removeHandler = (id) => {
//         console.log('clicked' , id);
//         const filteredProducts = this.state.products.filter( (p) => p.id !== id);
//         this.setState({ products: filteredProducts});
//     };

//     incrementHandler = (id) => {
//         const incProducts = [...this.state.products];
//         const selectedItem = incProducts.find((p) => p.id === id);
//         selectedItem.quantity++ ; //mutate state !!
//         this.setState( {products : incProducts});
//     };

//     decrementHandler = (id) => {
//         const decProducts = [...this.state.products];
//         const selectedItem = decProducts.find((p) => p.id === id);
//         if(selectedItem.quantity === 1) {
//             const filteredProducts = decProducts.filter( (p) => p.id !== id);
//             this.setState( {products : filteredProducts});
//         }else {
//             selectedItem.quantity-- ; //mutate state !!
//             this.setState( {products : decProducts});
//         }
//     }  

//     changeHandler = (event, id) => {
//         const products = [...this.state.products];
//         const selectedItem = products.find((p) => p.id === id);
//         selectedItem.title = event.target.value;
//         this.setState({ products }); // {products : products} equal {products}
//     };

//     renderProduct = () => {
//         if (this.state.products.length === 0)
//         return <div> There is no product in cart</div>;
//         return this.state.products.map((product , index) => {
//             return (
//                 <Product 
//                     // name= {product.title} 
//                     // price= {product.price} 
//                     // quantity= {product.quantity}
//                     product= {product}
//                     key= {index} 
//                     onDelete={() => this.removeHandler(product.id)}
//                     onIncrement= {() => this.incrementHandler(product.id)} 
//                     onDecrement= {() => this.decrementHandler(product.id)}
//                     onChange = {(e) => this.changeHandler(e , product.id)}
//                 />
//             );
//         });
//     }

//     render() { 
//         return (
//             <div>
//                 {/* {!this.state.products.length ?
                    // ( <div> go to shopping </div> ) :
                    // ( <div> wellcome back! </div> )} */}
                    // {!this.state.products.length && <div>go to shopping </div> }
                
//                 {this.renderProduct()}
//             </div>
//         );
//     }
// }
// export default ProductList;
