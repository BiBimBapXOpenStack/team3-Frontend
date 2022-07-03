import styles from "../css/EditBoardPage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {api, api2} from "../Config";

function EditBoardPage() {
    const params = useParams();
    const [id, setId] = useState('');
    const [bid, setBID] = useState('');
    const [files, setFiles] = useState();
    const [imageSrc, setImageSrc] = useState('');
    const [title, setTitle] = useState('');
    const [textfield,setTextField] = useState('');
    const [category,setCategory] = useState();
    const [isCalled, setIsCalled] = useState(false);

    console.log("main() called")

    let user = localStorage.getItem('id') || ''
    const photo = 'photo';

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleTextField = (e) => {
        console.log("handleTextField")
        console.log(e)
        console.log(e.target.toString())
        console.log(e.target.value.toString())
        setTextField(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const onLoadFile = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    }
    useEffect(() => {
        console.log("userEffect() called")
        setBID(params.bid);
        console.log(params.bid);

    }, []);
    if (!isCalled) getBoardInfo(bid);
    async function getBoardInfo(bid) {
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
                setIsCalled(true);
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    async function editBoard() {
        console.log("게시판 추가")
        console.log(imageSrc)
        console.log(title);
        try {
            const response = await axios.put(api + '/boards', {
                    title: title,
                    textfield: textfield,
                    photo: photo,
                    bid: bid,
                },
            ).then(res => {
                console.log(res);
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    const handleClick = (e) => {
        const formData = new FormData();
        formData.append('uploadImage', files[0]);
        const config = {
            Headers: {
                'content-type': 'multipart/form-data',
            },
        };
    }

    async function deleteBoard() {
        try {
            //응답 성공
            const response = await axios.delete(api + '/boards/' + bid);
            console.log(response.data);
            togglePopup("게시글 삭제되었습니다.");
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    const [showPopup, setShowPopup] = useState(false)
    const [text, setText] = useState("")

    function togglePopup(t) {
        setText(t);
        setShowPopup(!showPopup)
    }
    return (
        <div className={styles.main}>
            <Title text="글쓰기"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.row}>
                        <label><input type="checkbox" name="category" value="category1"/>카테고리1</label>
                        <label><input type="checkbox" name="category" value="category2"/>카테고리2</label>
                        <label><input type="checkbox" name="category" value="category3"/>카테고리3</label>
                        <label><input type="checkbox" name="category" value="category4"/>카테고리4</label>
                    </div>
                    <div className={styles.imgBlock}>
                        <input type='file' className={styles.imgInput} accept='image/*' onChange={(e) => {
                            onLoadFile(e.target.files[0]);
                        }}/>
                        {imageSrc && <img src={imageSrc} alt="preview-img" className={styles.imgView}/>}
                    </div>
                    <input type='text' className={styles.title} onChange={handleTitle} value={title}/>
                    <textarea className={styles.textArea} onChange={handleTextField} value={textfield}/>
                    <div className = {styles.row}>
                    <button className={styles.btn} onClick = {editBoard}>수정</button>
                    <button className={styles.btn} onClick = {deleteBoard}>삭제</button>
                        {showPopup ? (
                            <div className={styles.popup}>
                                <p>{text}</p>
                                <button className="close" onClick={togglePopup}>
                                    Close me
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBoardPage;