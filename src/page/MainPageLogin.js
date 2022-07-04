import React from 'react';
import MainCommonTable from "../component/table/MainCommonTable";
import styles from '../css/MainPage.module.css'
import Title from "../component/Title";
import axios from "axios";
import {api, api2} from "../Config";

const MainPageLogin = props => {

    console.log("main called")
    function write() {
        window.location.href = "/boards"
    }
    function myPage() {
        window.location.href = "/user"
    }
    function logout() {
        try {
            axios.get(api + '/users/logout')
                .then(res => {
                    console.log(res);
                    if (res.data) {
                        localStorage.removeItem('id');
                        window.location.href = "/";
                    }
                }
            )
        }
        catch (e) {
            
        }

    }
    return (
        <div className={styles.main}>
            <Title text="메인페이지"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.btnRow}>
                        <button className={styles.btn} onClick={myPage}>마이페이지</button>
                        <button className={styles.btn} onClick={logout}>로그아웃</button>
                    </div>
                    <MainCommonTable pos={styles.pos}/>
                    <button className={styles.btn} onClick={write}>글쓰기</button>
                </div>
            </div>
        </div>
    )
}

export default MainPageLogin;