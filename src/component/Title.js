import styles from "../css/Component.module.css"
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";

const Title = props => {
    const [url,setUrl] = useState("/");
    // const [categoryURL1, setCategoryURL1] = useState("/");
    // const [categoryURL2, setCategoryURL2] = useState("/");
    // const [categoryURL3, setCategoryURL3] = useState("/");
    // const [categoryURL4, setCategoryURL4] = useState("/");
    useEffect(() => {
        let user = localStorage.getItem('id') || '';
        if(user != '')
        {
            setUrl("/main")

        }
        else {
            setUrl("/")
        }
    },[])
    return (
        <div className={styles.header}>
            <Link to={url} className = {styles.title}>
                <h1 className={styles.title}>BLOG</h1>
            </Link>
            <h3>{props.text}</h3>
        </div>
    )
}
export default Title;
// <nav className={styles.nav}>
//     <ul className={styles.menuBar}>
//         <Link to={url} className = {styles.menuItem}>
//             <li className={styles.menuItem}>메인</li>
//         </Link>
//     </ul>
// </nav>
// <Link to={categoryURL1} className={styles.menuItem}>
//     <li className={styles.menuItem}>카테고리1</li>
// </Link>
// <Link to={categoryURL2} className={styles.menuItem}>
//     <li className={styles.menuItem}>카테고리2</li>
// </Link>
// <Link to={categoryURL3} className={styles.menuItem}>
//     <li className={styles.menuItem}>카테고리3</li>
// </Link>
// <Link to={categoryURL4} className={styles.menuItem}>
//     <li className={styles.menuItem}>카테고리4</li>
// </Link>