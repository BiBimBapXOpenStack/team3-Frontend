import styles from '../css/LoginPage.module.css'
import Title from "../component/Title";

function LoginPage() {
    function login() {
        console.log("로그인")
    }
    function register(e) {
        window.location.href = "/users/register"
    }
    return (
        <div className={styles.main}>
            <Title text="로그인"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.row}>
                        <label for = "id" className={styles.label}>아이디</label>
                        <input id= "id" className = {styles.text}  type = 'text'  />
                    </div>
                    <div className={styles.row}>
                        <label for = "pw" className={styles.label}>비밀번호</label>
                        <input id = "pw" className= {styles.text}  type = 'password'/>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.btn} onClick = {login}>로그인</button>
                        <button className={styles.btn} onClick = {register}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;