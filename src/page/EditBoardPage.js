import styles from "../css/EditBoardPage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";
import axios from "axios";

function EditBoardPage() {

    const [files, setFiles] = useState();
    const [imageSrc, setImageSrc] = useState('');
    const [title, setTitle] = useState();
    const [textfield,setTextField] = useState();
    const [category,setCategory] = useState();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleTextField = (e) => {
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
    const user = 'hayoon0524'
    const photo = 'photo'
    async function editBoard() {
        console.log("게시판 추가")
        console.log(imageSrc)
        console.log(title);
        try {
            const response = await axios.post('http://localhost:8000/boards', {
                data: {
                    u_id: user,
                    title: title,
                    textfield: textfield,
                    photo: photo,
                },
            }).then(res => {
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
                    <input type={'text'} className={styles.title} onChange={handleTitle} value={title}/>
                    <textarea className={styles.textArea} onChange={handleTextField}>{textfield}
                    </textarea>
                    <button className={styles.btn} onClick = {editBoard}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditBoardPage;