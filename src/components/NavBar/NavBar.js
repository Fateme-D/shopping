// passed state with context:
import { useProducts } from '../Provider/ProductsProvider';
import styles from './navBar.module.css';

const NavBar = () => {
    const products = useProducts();
    console.log(products)
    const totalItems = products.filter((p) => p.quantity > 0).length ;
    return (
        <header className={styles.navBar}> 
            <h2>shopping App </h2>
            <span> {totalItems} </span> 
        </header>
    );
}; 
export default NavBar;








// passed state with props:
// import styles from './navBar.module.css';
// const NavBar = ({ totalItems}) => {
//     return (
//         <header className={styles.navBar}> 
//             <h2>shopping App </h2>
//             <span> {totalItems} </span>
//         </header>
//     );
// }
// export default NavBar;