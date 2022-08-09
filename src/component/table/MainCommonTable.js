import React from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../../css/Component.module.css";
import {api, api2} from "../../Config";


const MainCommonTable = props => {
    const [datalist, setDatalist] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [url, setURL] = useState([]);
    let urllist = new Array();
    let user = localStorage.getItem('id') || '';

    useEffect(() => {

        async function getBoardInfo() {
            try {
                const response = await axios.get(api + '/boards/' + pageNum, {}).then(res => {
                    console.log(res.data);
                    setDatalist(res.data);
                    res.data.map((row, index) => {
                        url.push('boards/one/' + row.bid);
                        console.log(url[index]);
                    })
                });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        setURL([]);
        getBoardInfo();
    }, [pageNum]);

    const decreasePage = (e) => {
        if (pageNum > 1)
            setPageNum(pageNum => pageNum -1)
    }

    const increasePage = (e) => {
        setPageNum(pageNum => pageNum + 1)
    }
    return (
        <div>
            <CommonTable headersName={['글번호', '아이디', '제목', '등록일']} pos={props.pos}>
                {

                    datalist.map((row, index) => (
                        <CommonTableRow>
                            {/*{setURL('boards/one/' + row.bid)}*/}
                            <CommonTableColumn>{row.bid}</CommonTableColumn>
                            <CommonTableColumn>{row.u_id}</CommonTableColumn>
                            <CommonTableColumn>{row.title}</CommonTableColumn>
                            <CommonTableColumn>{row.enter_date}</CommonTableColumn>
                            <button onClick={() => {
                                window.location.href = url[index]
                            }}>게시물 보기
                            </button>
                        </CommonTableRow>
                    ))
                }

            </CommonTable>
            <div className={styles.divButton}>
                <button className={styles.btn} onClick={decreasePage}>왼쪽 페이지 가기 </button>
                <button className={styles.btn} onClick={increasePage}>오른쪽 페이지 가기 </button>
            </div>
        </div>
    )
}

export default MainCommonTable;