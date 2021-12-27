//use rest operator:
import styles from "./select.module.css";
import Select from 'react-select';
const SelectComponent = ({title, ...rest}) => {
    return (
        <div className={styles.selectContainer}>
            <span>sort by </span>
            <Select {...rest} className={styles.select} />
        </div>
    );
}
export default SelectComponent;












// import styles from "./select.module.css";
// import Select from 'react-select';
// const SelectComponent = ({value, onChange, options, title}) => {
//     return (
//         <div className={styles.selectContainer}>
//             <span>sort by </span>
//             <Select
//                 value={value}
//                 onChange={onChange}
//                 options={options}
//                 className={styles.select}
//             />
//         </div>
//     );
// }
// export default SelectComponent;