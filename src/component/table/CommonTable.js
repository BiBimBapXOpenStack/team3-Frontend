import styles from "../../css/Component.module.css"

function CommonTable(props) {
    const { headersName, children, pos} = props;

    return (
        <table className={ `${styles.commonTable} ${pos}`}>
            <thead>
            <tr>
                {
                    headersName.map((item, index) => {
                        return (
                            <td className= {styles.commonTableHeaderColumn} key={index}>{ item }</td>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                children
            }
            </tbody>
        </table>
    )
}

export default CommonTable;