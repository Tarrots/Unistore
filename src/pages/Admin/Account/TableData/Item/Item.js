import React from 'react'

export default function Item() {
    return (
        <tr>
                    <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                    <td>#CD12837</td>
                    <td>Hồ Thị Thanh Ngân</td>
                    <td><img className="img-card-person" src="/img-anhthe/1.jpg" alt="" /></td>
                    <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                    <td>12/02/1999</td>
                    <td>Nữ</td>
                    <td>0926737168</td>
                    <td>Bán hàng</td>
                    <td className="table-td-center"><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" />
                    </button>
                        <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP"><i className="fas fa-edit" />
                        </button>
                    </td>
                </tr>
    )
}
