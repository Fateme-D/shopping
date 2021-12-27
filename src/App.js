//2.Functional componenet:
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import ProductsProvider from './components/Provider/ProductsProvider';
import Filter from './components/Filter/Filter';
import SearchBar from "./common/Search/Search";
const App = () => {
    return (
        <div className="container" id="title">
            <ProductsProvider>
                <NavBar />
                <SearchBar/>
                <Filter />
                <ProductList />
            </ProductsProvider>
        </div>
    );
}
export default App;








//1. Class componenets:
// import React, { Component } from 'react';
// import ProductList from './components/ProductList/ProductList';
// import "./App.css";
// import NavBar from './components/NavBar/NavBar';
// import ClassCounter from './components/ClassCounter';
// import FunctionalCounter from './components/FunctioalCounter';
// import CounterProvider from './components/Context/ContextProvider';
// import CounterOne from './components/Context/CounterOne';
// import CountReducer from './components/Reducer/CountReducer';
// import CounterProvider2 from './Component/Context&UseReducer/CounterProvider2';
// class App extends Component {
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
//         // const incProducts = [...this.state.products];  //same refrence
//         // const selectedItem = incProducts.find((p) => p.id === id);
//         // selectedItem.quantity++ ; //mutate state !!
//         // this.setState( {products : incProducts});
//         const index = this.state.products.findIndex((item) => item.id === id );
//         console.log(index);
//         const product = { ...this.state.products[index] };
//         product.quantity++;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products });
//     };

//     decrementHandler = (id) => {
//         // const decProducts = [...this.state.products];
//         // const selectedItem = decProducts.find((p) => p.id === id);
//         // if(selectedItem.quantity === 1) {
//         //     const filteredProducts = decProducts.filter( (p) => p.id !== id); 
//         //     this.setState( {products : filteredProducts});
//         // }else {
//         //     selectedItem.quantity-- ; //mutate state !!
//         //     this.setState( {products : decProducts});
//         // }
//         const index = this.state.products.findIndex((item) => item.id === id );
//         console.log(index);
//         //clone the selected index and update te quty;
//         const product = { ...this.state.products[index] };
//         if(product.quantity === 1) {
//             const filteredProducts = this.state.products.filter( (p) => p.id !== id); 
//             this.setState( {products : filteredProducts});
//         }else {
//             //update products
//             const products = [...this.state.products];
//             product.quantity-- ;
//             products[index] = product;
//             this.setState( {products });
//         }
//     };

//     changeHandler = (event, id) => {
//         // const products = [...this.state.products];
//         // const selectedItem = products.find((p) => p.id === id);
//         // selectedItem.title = event.target.value;
//         // this.setState({ products }); // {products : products} equal {products}
//         const index = this.state.products.findIndex((item) => item.id === id );
//         console.log(index);
//         const product = { ...this.state.products[index] };
//         product.title = event.target.value;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products });// {products : products} equal {products}
//     };


//     componentDidMount() {
//         console.log( "App.js componentDidMount");
//         //AJAX
//         //products => this.setState({products...})
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("App.js componentDidUpdate");
//         console.log("App.js", prevState);
//     }

//     render() { 
//         return (
//             <div className="container" id="title">
//                 <CounterProvider2 >
//                     <p> welcome to context </p>
//                     <CountReducer/>
//                     {/* <CounterOne /> */}
//                 </CounterProvider2>
//                 {/* <ClassCounter /> */}
//                 {/* <FunctionalCounter /> */}
//                {/* <NavBar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
//                 <ProductList 
//                     products={this.state.products} 
//                     onRemove={this.removeHandler}
//                     onIncrement={this.incrementHandler}
//                     onChange={this.changeHandler}
//                     onDecrement ={this.decrementHandler}
//                 /> */}
//             </div>
//         );
//     }
// }
// export default App;
