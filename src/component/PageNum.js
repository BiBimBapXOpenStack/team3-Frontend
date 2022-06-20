import styles from "../css/Component.module.css"
import {Link} from 'react-router-dom'
import {useState} from "react";

const PageNum = props => {
    var nums = [];
    for (var i = 1; i <= props.num; i++) {
        nums.push(i);
    }

    return (
        <div className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.menuBar}>{
                    nums.map(x => (
                        <li className={styles.menuItem}>{x}</li>
                    ))
                }
                </ul>
            </nav>
        </div>
    )
}
export default PageNum;
