import styles from "../../css/Component.module.css"

function CommonTableRow ({ children} ) {
    return (
        <tr className={styles.commonTableRow}>
            {
                children
            }
        </tr>
    )
}

export default CommonTableRow;