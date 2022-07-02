import styles from '../css/RegisterPage.module.css'
import Title from "../component/Title";
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {registerUser} from "../_actions/user_action";

function RegisterPage({props}) {
    const dispatch = useDispatch();
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')

    const handleId = (e) => {
        setId(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value)
    }
    const handlePwCheck = (e) => {
        setPwCheck(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }

    async function register() {
        if (pw !== pwCheck) {
            return togglePopup("비밀번호 체크 오류")
        }
        if (!id || !pw || !email || !name) {
            return togglePopup("빈칸 존재")
        }
            console.log("회원가입")
            let data = {
                id: id,
                uname: name,
                pw: pw,
                email: email,
            }
            try {
                dispatch(registerUser(data))
                    .then(response => {
                        console.log(response.payload)
                        if (!response.payload.status) {
                            togglePopup("회원가입 실패")
                        }
                        else {
                            alert("회원가입 성공")

                            window.location.href = "/user/login";
                        }
                    });

            } catch (error) {
                //응답 실패
                console.error(error);
            }
    }

    function idCheck() {
        console.log("idCheck")
    }

    const [text, setText] = useState("")

    async function idCheck() {
        try {
            //응답 성공
            const response = await axios.get('http://localhost:8000/users/register/' + id);
            console.log(response.data);
            togglePopup(response.data.message);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    const [showPopup, setShowPopup] = useState(false);

    function togglePopup(t) {
        setText(t);
        setShowPopup(!showPopup)
    }

    return (
        <div className={styles.main}>
            <Title text="회원가입"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.inputRow}>
                        <label for="id" className={styles.label}>아이디</label>
                        <input id="id" className={styles.idText} type='text' value={id} onChange={handleId}/>
                        <button className={styles.idBtn} onClick={idCheck}>중복확인</button>
                        {showPopup ? (
                            <div className={styles.popup}>
                                <p>{text}</p>
                                <button className="close" onClick={togglePopup}>
                                    Close me
                                </button>
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.inputRow}>
                        <label for="pw" className={styles.label}>비밀번호</label>
                        <input id="pw" className={styles.text} type='password' value={pw} onChange={handlePw}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="pwc" className={styles.label}>비밀번호 확인</label>
                        <input id="pwc" className={styles.text} type='password' value={pwCheck}
                               onChange={handlePwCheck}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="email" className={styles.label}>이메일</label>
                        <input id="email" className={styles.text} type='text' value={email} onChange={handleEmail}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="name" className={styles.label}>이름</label>
                        <input id="name" className={styles.text} type='text' value={name} onChange={handleName}/>
                    </div>

                    <button className={styles.registerBtn} onClick={register}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;