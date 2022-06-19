import styles from '../css/EditPage.module.css'
import Title from "../component/Title";
import axios from "axios";
import {useEffect, useState} from "react";

function EditPage() {
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [text, setText] = useState("")

    const handleId = (e) => {
        setId(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value)
    }
    const handlePwCheck = (e) => {
        setPwCheck(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }

    //let token = localStorage.getItem('jwtToken') || '';
    const user = "hayoon0524"
    useEffect(() => {
        async function getInfo() {

            try {
                const response = await axios.get('http://localhost:8000/users/' + user, {
                    data: {
                        id: user
                    },
                    //headers: {
                    //   'Authorization' : token,
                    //}
                }).then(res => {
                    console.log(res);
                    setId(res.data.id);
                    setEmail(res.data.email);
                    setName(res.data.uname);
                });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        getInfo();
    },[]);
    async function edit() {
        console.log("수정")
        try {
            const response = await axios.put('http://localhost:8000/users', {
                data: {
                    id: user,
                    name: name,
                    pw: pw,
                    email: email,
                },
                //headers: {
                //   'Authorization' : token,
                //}
            }).then(res => {
                console.log(res);
            });
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    function idCheck() {
        console.log("idCheck")
    }

    return (
        <div className={styles.main}>
            <Title text="수정"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.inputRow}>
                        <label for="pw" className={styles.label}>비밀번호</label>
                        <input id="pw" className={styles.text} type='password' onChange={handlePw}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="pwc" className={styles.label}>비밀번호 확인</label>
                        <input id="pwc" className={styles.text} type='password' onChange={handlePwCheck}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="email" className={styles.label}>이메일</label>
                        <input id="email" className={styles.text} type='text' value={email} onChange={handleEmail}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="name" className={styles.label}>이름</label>
                        <input id="name" className={styles.text} type='text' value={name} onChange={handleName}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="gender" className={styles.label}>성별</label>
                        <input id="gender" className={styles.text} type='text'/>
                    </div>
                    <button className={styles.editBtn} onClick={edit}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default EditPage;