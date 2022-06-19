import styles from "../css/MyPage.module.css";
import Title from "../component/Title";
import {useState, useEffect} from "react";
import MainCommonTable from "../component/table/MainCommonTable";
import {Link} from 'react-router-dom'
import axios from "axios";
import setAuthorizationToken from "../router/setAuthorizationToken";

function MyPage() {
    const [page, setPage] = useState(true);
    const pageChange = () => {
        setPage(!page);
        display();
    }
    function display(){
        const btn = document.getElementById("btn");
        if(page) {
            document.getElementById("one").style.display='flex'
            document.getElementById("two").style.display='none'
            btn.innerText = '내 글 보기'
        }
        else {
            document.getElementById("one").style.display='none'
            document.getElementById("two").style.display='flex'
            btn.innerText = '내 정보 보기'
        }
    }
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [text, setText] = useState("")
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
    return (
        <div className={styles.main}>
            <Title text="마이페이지"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <button id = "btn" className={styles.btn} onClick={pageChange}>내 글 보기</button>
                    <div id="one" className = {styles.one}>
                        <div className={styles.row}>
                            <h4 className={styles.text}>아이디 :</h4>
                            <p>{id}</p>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>이메일 :</h4>
                            <p>{email}</p>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>이름 :</h4>
                            <p>{name}</p>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>성별 :</h4>
                            <p>{gender}</p>
                        </div>
                        <Link to ="/user/edit">
                            <button className={styles.btn} >수정</button>
                        </Link>

                    </div>
                    <div id="two" className={styles.two}>
                        <MainCommonTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyPage