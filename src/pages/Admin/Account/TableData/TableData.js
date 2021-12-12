import React from 'react'
import Item from './Item/Item'

export default function TableData() {
    return (
        <table className="table table-hover table-bordered js-copytextarea" cellPadding={0} cellSpacing={0} border={0} id="sampleTable">
            <thead>
                <tr>
                    <th width={10}><input type="checkbox" id="all" /></th>
                    <th>ID nhân viên</th>
                    <th width={150}>Họ và tên</th>
                    <th width={20}>Ảnh thẻ</th>
                    <th width={300}>Địa chỉ</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>SĐT</th>
                    <th>Chức vụ</th>
                    <th width={100}>Tính năng</th>
                </tr>
            </thead>
            <tbody>
                <Item/>
                <Item/>
                <Item/>
            </tbody>
        </table>
    )
}
