import React from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../../css/Component.module.css";



const MainCommonTable = props => {
    const [datalist, setDatalist] = useState([]);
    const [url, setURL] = useState([]);
    let urllist =new Array();
    let user = localStorage.getItem('id') || '';


    useEffect(() => {
        const page = '1';
        async function getBoardInfo() {

            try {
                const response = await axios.get('http://133.186.150.67:8000/boards/' +page, {
                }).then(res => {
                    console.log(res);
                    setDatalist(res.data);
                    res.data.map((row,index)=>{
                        url.push('boards/one/'+row.bid);
                        console.log(url[index]);
                    })
                });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        getBoardInfo();
    },[]);

    return (
        <CommonTable headersName={['글번호', '아이디', '제목', '등록일']} pos={props.pos}>
            {

            datalist.map((row,index) => (
                <CommonTableRow>
                    {/*{setURL('boards/one/' + row.bid)}*/}
                    <CommonTableColumn>{row.bid}</CommonTableColumn>
                    <CommonTableColumn>{row.u_id}</CommonTableColumn>
                    <CommonTableColumn>{row.title}</CommonTableColumn>
                    <CommonTableColumn>{row.enter_date}</CommonTableColumn>
                    <button onClick = { () => {
                        window.location.href = url[index]
                    }}>게시물 보기</button>
                </CommonTableRow>
            ))
            }

        </CommonTable>
    )
}

export default MainCommonTable;