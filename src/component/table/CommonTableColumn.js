import styles from "../../css/Component.module.css"
function CommonTableColumn ({ children} ) {
    return (
        <td className= {styles.commonTableColumn}>
            {
                children
            }
        </td>
    )
}
export default CommonTableColumn;