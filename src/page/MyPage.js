import styles from "../css/MyPage.module.css";
import Title from "../component/Title";
import {useState} from "react";
import MainCommonTable from "../component/table/MainCommonTable";

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
    function edit() {
        window.location.href = "/users/register"
    }
    return (
        <div className={styles.main}>
            <Title text="마이페이지"></Title>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <button id = "btn" className={styles.btn} onClick={pageChange}>내 글 보기</button>
                    <div id="one" className = {styles.one}>
                        <div className={styles.row}>
                            <h4 className={styles.text}>아이디 : </h4>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>이메일 : </h4>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>이름 : </h4>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.text}>성별 : </h4>
                        </div>
                        <button className={styles.btn} onClick={edit}>수정</button>
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