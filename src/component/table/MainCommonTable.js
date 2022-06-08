import React from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';

const MainCommonTable = props => {
    return (
        <CommonTable headersName={['글번호', '아이디', '제목', '등록일']} pos = {props.pos}>
            <CommonTableRow>
                <CommonTableColumn>1</CommonTableColumn>
                <CommonTableColumn>1234</CommonTableColumn>
                <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>2020-10-25</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>2</CommonTableColumn>
                <CommonTableColumn>1111</CommonTableColumn>
                <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>2020-10-25</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>3</CommonTableColumn>
                <CommonTableColumn>hh</CommonTableColumn>
                <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>2020-10-25</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>4</CommonTableColumn>
                <CommonTableColumn>ii</CommonTableColumn>
                <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>2020-10-25</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
                <CommonTableColumn>5</CommonTableColumn>
                <CommonTableColumn>kk</CommonTableColumn>
                <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
                <CommonTableColumn>2020-10-25</CommonTableColumn>
            </CommonTableRow>
        </CommonTable>
    )
}

export default MainCommonTable;