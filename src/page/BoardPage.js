import styles from "../css/BoardPage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {render} from "react-dom";

const info = {
    1: {
        id: '1'
    },

}

function BoardPage() {

    const params = useParams();
    const [imageSrc, setImageSrc] = useState('');
    const [bid, setBID] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [textfield, setTextField] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        setBID(params.bid);
        console.log(params.bid);
    }, []);
    let user = localStorage.getItem('id') || ''
    async function getBoardInfo() {
        try {
            const bb = parseInt(bid);
            const response = await axios.get('http://localhost:8000/boards/board/' + bid, {
                data: {
                    b_id: bb,
                },
            }).then(res => {
                console.log(res);
                setId(res.data.u_id);
                setTitle(res.data.title);
                setTextField(res.data.textfield);
                setDate(res.data.enter_date);
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    getBoardInfo();

    function edit() {
        window.location.href = "/"+user+"/boards/edit/"+bid;
    }
    return (
        <div className={styles.main}>
            <Title text="게시글"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.row}>
                        <p className={styles.pp}>username: {id}</p>
                        <p className={styles.pp}>date: {date}</p>
                    </div>
                    <div className={styles.imgBlock}>
                        {imageSrc && <img src={imageSrc} alt="preview-img" className={styles.imgView}/>}
                    </div>
                    <p className={styles.textField}>{textfield}</p>
                    {id == user ?
                        <button className={styles.editBtn} onClick={edit}>수정</button>
                        : <div></div>
                    }

                </div>
            </div>
        </div>
    );
}

export default BoardPage;