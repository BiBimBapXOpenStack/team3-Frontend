import styles from "../css/BoardPage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {render} from "react-dom";
import {Buffer} from "buffer";
import {api} from "../Config";
import {api2} from "../Config"

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
    const [photoURL, setPhotoURL] = useState('');
    const [date, setDate] = useState('');
    let formData = new FormData();

    useEffect(() => {
        setBID(params.bid);
        console.log(params.bid);
    }, []);
    useEffect(() => {
        getBoardInfo();
    }, [bid]);
    let user = localStorage.getItem('id') || ''

    async function getBoardInfo() {
        try {
            const bb = parseInt(bid);
            const response = await axios.get(api + '/boards/board/' + bid, {
                data: {
                    b_id: bb,
                },
            }).then(res => {
                console.log(res);
                setId(res.data.u_id);
                setTitle(res.data.title);
                setTextField(res.data.textfield);
                setDate(res.data.enter_date);
                setPhotoURL(res.data.photoURL);

                //getImage(res.data.photoURL);
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    async function getImage(image) {
        console.log(image);
        if (image) {
            try {
                const bb = parseInt(bid);
                const response = await axios.get(api + '/board/image/' + bid, {
                    data: {
                        b_id: bb,
                    },
                    responseType: 'arraybuffer'
                }).then(res => {
                    const buffer64 = Buffer.from(res.data, 'binary').toString('base64');
                    setImageSrc("data:" + res.headers["content-type"] + ";base64," + buffer64);
                });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
    }
    // const onLoadFile = (fileBlob) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(fileBlob);
    //     return new Promise((resolve) => {
    //         reader.onload = () => {
    //             console.log(reader.result);
    //             setImageSrc(reader.result);
    //             resolve();
    //         };
    //     });
    // }
    function edit() {
        window.location.href = "/" + user + "/boards/edit/" + bid;
    }

    return (
        <div className={styles.main}>
            <Title text="게시글"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.row}>
                        <p className={styles.pp}>username: {id}</p>
                        <p className={styles.pp}>date: {photoURL}</p>
                    </div>
                    <div className={styles.imgBlock}>
                        {photoURL && <img src={photoURL} alt="preview-img" className={styles.imgView}/>}
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