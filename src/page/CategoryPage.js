import React from 'react';
import MainCommonTable from "../component/table/MainCommonTable";
import styles from '../css/MainPage.module.css'
import Title from "../component/Title";
import {useParams} from "react-router";

const info = {
    category1 : {
        title: '카테고리1'
    },
    category2 : {
        title: '카테고리2'
    },
    category3 : {
        title: '카테고리3'
    },
    category4 : {
        title: '카테고리4'
    },

}

const CategoryPage = props => {


    function write() {
        window.location.href = "/boards"
    }
    function myPage() {
        window.location.href = "/user"
    }

    const params = useParams();
    const data = info[params.category];

    return (
        <div className={styles.main}>
            <Title text={data.title}></Title>
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

export default CategoryPage;