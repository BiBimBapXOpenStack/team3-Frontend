import styles from "../css/WritePage.module.css";
import Title from "../component/Title";

function WritePage() {
    return (
        <div className={styles.main}>
            <Title text="글쓰기"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.row}>
                        <label><input type="checkbox" name="category" value="blue"/>카테고리1</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리2</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리3</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리4</label>
                    </div>
                    <textarea className={styles.textArea}>
                    </textarea>
                    <button className={styles.btn}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default WritePage;