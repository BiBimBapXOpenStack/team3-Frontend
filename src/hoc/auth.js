import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
//null => 아무나 출입이 가능한 페이지
//true => 로그인한 유저만 출입 가능한 페이지
//false => 로그인한 유저는 출입 불가능한 페이지
export default function(SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        useEffect(() => {
            const dispatch = useDispatch();

            // dispatch(auth().then(response => {
            //     console.log(response)
            //     if(!response.payload.isAuth) {
            //         if (option) {
            //             //go to login
            //         }
            //     }
            //     else {
            //         //로그인 한 상태
            //         if (adminRoute && !response.payload.isAdmin) {
            //             //메인페이지 보내기
            //         } else {
            //             if (option === false) {
            //                 //login 이나 register 접근하려고 할때
            //             }
            //         }
            //     }
            // }))

        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}
