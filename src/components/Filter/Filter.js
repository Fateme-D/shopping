//react-select library:
import { useProductsActions } from "../Provider/ProductsProvider";
import { useState} from 'react';
import Select from 'react-select';
import styles from './filter.module.css';
import SelectComponent from '../../common/Select/Select';
const options = [
    { value: '', label: 'ALL' },
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'XS', label: 'XS' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
];


const sortOptions = [
    { value: 'highest', label: 'highest' },
    { value: 'lowest', label: 'lowest' },
];

const Filter = () => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState("");
    const [sort, setSort] = useState("");

    const changeHandler = (selcetedOption) => {
        console.log(selcetedOption)
        dispatch( { type: "filter", selcetedOption: selcetedOption });
        dispatch( { type: "sort", selcetedOption: sort });
        setValue(selcetedOption);
    };

    const sortHandler = (selcetedOption) => {
        console.log(selcetedOption)
        dispatch( { type: "sort", selcetedOption: selcetedOption });
        setSort(selcetedOption);
    };
    return ( 
        <div className={styles.filter} > 
            <p>filter products based on:</p>
            <SelectComponent 
                title="filter by size"
                value={value}
                onChange={changeHandler}
                options={options}
                className={styles.select}
            />
            <SelectComponent 
                title="sort by price"
                value={sort}
                onChange={sortHandler}
                options={sortOptions}
                className={styles.select}
            />
        </div>
    );
}
export default Filter;















// import { useProductsActions } from "../Provider/ProductsProvider";
// import { useState} from 'react';

// const Filter = () => {
//     const dispatch = useProductsActions();
//     const [value, setValue] = useState("");

//     const changeHandler = (e) => {
//         dispatch( { type: "filter", event:e });
//         setValue(e.target.value);
//     };
//     return ( 
//         <div>
//             <p>filter products based on:</p>
//             <div>
//                 order by
//                 <select onChange={changeHandler} value={value} >
//                     <option value=""> All </option>
//                     <option value="XS"> XS </option>
//                     <option value="S"> S </option>
//                     <option value="M"> M </option>
//                     <option value="L"> L </option>
//                     <option value="XL"> XL </option>
//                     <option value="XXL"> XXL </option>
//                 </select>
//             </div>
//         </div>
//     );
// }
// export default Filter;