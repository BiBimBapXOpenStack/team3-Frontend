import styles from '../css/LoginPage.module.css'
import Title from "../component/Title";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {loginUser} from '../_actions/user_action'
import {useDispatch} from 'react-redux'
import setAuthorizationToken from "../router/setAuthorizationToken";


function LoginPage() {
    console.log("main called")
    const dispatch = useDispatch();
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [text, setText] = useState("s")

    const handleId = (e) => {
        setId(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value)
    }

    async function login(event) {
        event.preventDefault();
        console.log("로그인")
        try {
            let data = {
                id: id,
                pw: pw
            };
            dispatch(loginUser(data))
                .then(response => {
                    if (!response.payload.token) {
                        togglePopup(response.payload.message)
                    }
                    else {
                        const token = response.payload.token;
                        console.log(response);
                        localStorage.setItem('jwtToken', token.token);
                        localStorage.setItem('id',response.payload.id);
                        setAuthorizationToken(token.token);
                        window.location.href = "/"+id;
                    }
                });

        } catch (error) {
            //응답 실패
            togglePopup()
            console.error(error);

        }
    }

    const togglePopup = (t) => {
        setText(t)
        setShowPopup(!showPopup)
    };

    function register(e) {
        window.location.href = "/users/register"
    }

    return (
        <div className={styles.main}>
            <Title text="로그인"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.row}>
                        <label for="id" className={styles.label}>아이디</label>
                        <input id="id" className={styles.text} type='text' value={id} onChange={handleId}/>
                    </div>
                    <div className={styles.row}>
                        <label for="pw" className={styles.label}>비밀번호</label>
                        <input id="pw" className={styles.text} type='password' value={pw} onChange={handlePw}/>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.btn} onClick={login}>로그인</button>
                        {showPopup ? (
                            <div className={styles.popup}>
                                <p>{text}</p>
                                <button className="close" onClick={togglePopup}>
                                    Close me
                                </button>
                            </div>
                        ) : null}
                        <button className={styles.btn} onClick={register}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;