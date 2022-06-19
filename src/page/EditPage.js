import styles from '../css/EditPage.module.css'
import Title from "../component/Title";

function EditPage() {

    function edit() {
        console.log("회원가입")
    }

    function idCheck() {
        console.log("idCheck")
    }

    return (
        <div className={styles.main}>
            <Title text="수정"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.inputRow}>
                        <label for="pw" className={styles.label}>비밀번호</label>
                        <input id="pw" className={styles.text} type='password'/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="pwc" className={styles.label}>비밀번호 확인</label>
                        <input id="pwc" className={styles.text} type='password'/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="email" className={styles.label}>이메일</label>
                        <input id="email" className={styles.text} type='text'/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="name" className={styles.label}>이름</label>
                        <input id="name" className={styles.text} type='text'/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="gender" className={styles.label}>성별</label>
                        <input id="gender" className={styles.text} type='text'/>
                    </div>
                    <button className={styles.editBtn} onClick={edit}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default EditPage;