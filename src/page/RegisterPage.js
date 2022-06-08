import styles from '../css/RegisterPage.module.css'
import Title from "../component/Title";

function RegisterPage() {

    function register() {
        console.log("회원가입")
    }

    function idCheck() {
        console.log("idCheck")
    }

    return (
        <div className={styles.main}>
            <Title text="회원가입"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.inputRow}>
                        <label for="id" className={styles.label}>아이디</label>
                        <input id="id" className={styles.idText} type='text'/>
                        <button className={styles.idBtn} onClick={idCheck}>중복확인</button>
                    </div>
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
                    <button className={styles.registerBtn} onClick={register}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;