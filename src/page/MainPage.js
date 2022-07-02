import React from 'react';
import MainCommonTable from "../component/table/MainCommonTable";
import styles from '../css/MainPage.module.css'
import Title from "../component/Title";

const MainPage = props => {
    console.log("main called")
    function login(e) {
        window.location.href = "/user/login"
    }

    function register(e) {
        window.location.href = "/users/register"
    }

    return (
        <div className={styles.main}>
            <Title text="메인페이지"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.btnRow}>
                        <button className={styles.btn} onClick={login}>로그인</button>
                        <button className={styles.btn} onClick={register}>회원가입</button>
                    </div>
                    <MainCommonTable pos={styles.pos}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;