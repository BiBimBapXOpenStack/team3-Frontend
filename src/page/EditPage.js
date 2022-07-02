import styles from '../css/EditPage.module.css'
import Title from "../component/Title";
import axios from "axios";
import {useEffect, useState} from "react";

function EditPage() {
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwChange, setPwChange] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [text, setText] = useState("")

    function togglePopup(t) {
        setText(t);
        setShowPopup(!showPopup)
    }

    const handleId = (e) => {
        setId(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value)
    }
    const handlePwChange = (e) => {
        setPwChange(e.target.value)
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

    let user = localStorage.getItem('id') || '';
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
        if (pwChange === pwCheck) {
            console.log("수정")
            let data = {
                id: user,
                pw: pw,
                pwChange: pwChange,
                name: name,
                email: email,
            }
            try {
                const response = await axios.put('http://localhost:8000/users', data)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.code);
                        if (res.data.code == 200) {
                            //window.location.href = "/user"
                        }
                        else if (res.data.code == 400) {
                            togglePopup("현재 비밀번호가 다르다")
                        }
                    });
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        else {
            togglePopup("비밀번호와 확인이 다릅니다")
        }
    }
    async function deleteUser() {
        try {
            //응답 성공
            const response = await axios.delete('http://localhost:8000/users/' + user);
            console.log(response.data);
            alert("회원탈퇴 되었습니다");
            window.location.href = "/";
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    return (
        <div className={styles.main}>
            <Title text="수정"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.inputRow}>
                        <label for="pw" className={styles.label}>현재 비밀번호 확인</label>
                        <input id="pw" className={styles.text} type='text' value = {pw} onChange={handlePw}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="pwc" className={styles.label}>수정 비밀번호</label>
                        <input id="pwc" className={styles.text} type='text' value = {pwChange} onChange={handlePwChange}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label htmlFor="pwc" className={styles.label}>수정 비밀번호 확인</label>
                        <input id="pwc" className={styles.text} type='text' value={pwCheck} onChange={handlePwCheck}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="email" className={styles.label}>이메일</label>
                        <input id="email" className={styles.text} type='text' value={email} onChange={handleEmail}/>
                    </div>
                    <div className={styles.inputRow}>
                        <label for="name" className={styles.label}>이름</label>
                        <input id="name" className={styles.text} type='text' value={name} onChange={handleName}/>
                    </div>
                    <div className = {styles.row}>
                    <button className={styles.btn} onClick={edit}>수정</button>
                    <button className={styles.btn} onClick={deleteUser}>  회원탈퇴  </button>
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

export default EditPage;