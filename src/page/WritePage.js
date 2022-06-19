import styles from "../css/WritePage.module.css";
import Title from "../component/Title";
import {useEffect, useState} from "react";

function WritePage() {

    const [files, setFiles] = useState();
    const [imageSrc, setImageSrc] = useState('');
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
                        <label><input type="checkbox" name="category" value="blue"/>카테고리1</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리2</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리3</label>
                        <label><input type="checkbox" name="category" value="red"/>카테고리4</label>
                    </div>
                    <div className={styles.imgBlock}>
                        <input type='file' className={styles.imgInput} accept='image/*' onChange={(e) => {
                            onLoadFile(e.target.files[0]);
                        }}/>
                        {imageSrc && <img src={imageSrc} alt="preview-img" className={styles.imgView}/>}
                    </div>
                    <textarea className={styles.textArea}>
                    </textarea>
                    <button className={styles.btn}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default WritePage;