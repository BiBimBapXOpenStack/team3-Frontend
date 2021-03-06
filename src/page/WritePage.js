import styles from "../css/WritePage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {api, api2} from "../Config";

function WritePage() {

    const [file, setFile] = useState("");
    const [imageSrc, setImageSrc] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState("");
    const [textfield,setTextField] = useState("");
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
        setFile(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                console.log(reader.result);
                setImageSrc(reader.result);
                resolve();
            };
        });
    }
    let user = localStorage.getItem('id') || ''
    const photo = 'photo'
    async function insertImage() {
        if (!title && !textfield) {
            alert("제목과 내용이 없습니다");
            return;
        }
        if (file) {
            console.log("게시판 추가")
            console.log(file);
            const img = new FormData();
            img.append("file", file);
            for (const value of img.values()) {
                console.log(value);
            }
            try {
                const response = await axios.post(api + '/boards/image',
                    img,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(res => {
                    //console.log(res.data);
                    insertBoard(res.data);
                });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        else {
            insertBoard();
        }

    }
    async function insertBoard(file)
    {
        console.log(file)
        try {
            const response = await axios.post(api + '/boards',
                {
                    u_id: user,
                    title: title,
                    textfield: textfield,
                    photoURL : file,
                },
                //
            ).then(res => {
                console.log(res);
                window.location.href = "/main";
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    return (
        <div className={styles.main}>
            <Title text="글쓰기"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <input type={'text'} placeholder={"제목"} className={styles.title} onChange={handleTitle}/>
                    <div className={styles.imgBlock}>
                        <input type='file' className={styles.imgInput} accept='image/*' onChange={(e) => {
                            onLoadFile(e.target.files[0]);
                        }}/>
                        {imageSrc && <img src={imageSrc} alt="preview-img" className={styles.imgView}/>}
                    </div>
                    <textarea className={styles.textArea} onChange={handleTextField}>
                    </textarea>
                    <button className={styles.btn} onClick = {insertImage}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default WritePage;

// <div className={styles.row}>
//     <label><input type="checkbox" name="category" value="blue"/>카테고리1</label>
//     <label><input type="checkbox" name="category" value="red"/>카테고리2</label>
//     <label><input type="checkbox" name="category" value="red"/>카테고리3</label>
//     <label><input type="checkbox" name="category" value="red"/>카테고리4</label>
// </div>