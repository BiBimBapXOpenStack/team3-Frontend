import React from 'react';
import MainCommonTable from "../component/table/MainCommonTable";
import styles from '../css/MainPage.module.css'
import Title from "../component/Title";

const MainPageLogin = props => {

    function write() {
        window.location.href = "/boards"
    }
    function myPage() {
        window.location.href = "/user"
    }

    return (
        <div className={styles.main}>
            <Title text="BLOG"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.btnRow}>
                        <button className={styles.btn} onClick={myPage}>마이페이지</button>
                    </div>
                    <MainCommonTable pos={styles.pos}/>
                    <button className={styles.btn} onClick={write}>글쓰기</button>
                </div>
            </div>
        </div>
    )
}

export default MainPageLogin;