import styles from "../css/Component.module.css"
import {Link} from 'react-router-dom'

const Title = props => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{props.text}</h1>
            <nav className={styles.nav}>
                <ul className={styles.menuBar}>
                    <Link to="/" className = {styles.menuItem}>
                        <li className={styles.menuItem}>메인</li>
                    </Link>
                    <Link to="/boards/category1" className={styles.menuItem}>
                        <li className={styles.menuItem}>카테고리1</li>
                    </Link>
                    <Link to="/boards/category2" className={styles.menuItem}>
                        <li className={styles.menuItem}>카테고리2</li>
                    </Link>
                    <Link to="/boards/category3" className={styles.menuItem}>
                        <li className={styles.menuItem}>카테고리3</li>
                    </Link>
                    <Link to="/boards/category4" className={styles.menuItem}>
                        <li className={styles.menuItem}>카테고리4</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Title;