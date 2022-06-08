import styles from "../css/Component.module.css"
const Title = props => {
    return (
        <div className={styles.header}>
        <h1 className={styles.title}>{props.text}</h1>
            <nav className={styles.nav}>
                <ul className={styles.menuBar}>
                    <li className={styles.menuItem}>메인</li>
                    <li className={styles.menuItem}>카테고리1</li>
                    <li className={styles.menuItem}>카테고리2</li>
                    <li className={styles.menuItem}>카테고리3</li>
                    <li className={styles.menuItem}>카테고리4</li>
                </ul>
            </nav>
        </div>
    )
}
export default Title;