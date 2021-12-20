import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ElementButton  from './ElementButton/ElementButton'
import TableData from './TableData/TableData'

export default function Account() {
    return (
        <div>
        <Header/>
        <Navbar/>
            <div>
                <main className="app-content">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb side">
                            <li className="breadcrumb-item active"><a href="/admin"><b>Danh sách nhân viên</b></a></li>
                        </ul>
                        <div id="clock" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <div className="tile-body">
                                    <ElementButton/>
                                    <TableData/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="modal fade" id="ModalUP" tabIndex={-1} role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-group  col-md-12">
                                        <span className="thong-tin-thanh-toan">
                                            <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label className="control-label">ID nhân viên</label>
                                        <input className="form-control" type="text" required defaultValue="#CD2187" disabled />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Họ và tên</label>
                                        <input className="form-control" type="text" required defaultValue="Võ Trường" />
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label className="control-label">Số điện thoại</label>
                                        <input className="form-control" type="number" required defaultValue={123} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Địa chỉ email</label>
                                        <input className="form-control" type="text" required defaultValue="truong.vd2000@gmail.com" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Ngày sinh</label>
                                        <input className="form-control" type="date" defaultValue="15/03/2000" />
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>Bán hàng</option>
                                            <option>Tư vấn</option>
                                            <option>Dịch vụ</option>
                                            <option>Thu Ngân</option>
                                            <option>Quản kho</option>
                                            <option>Bảo trì</option>
                                            <option>Kiểm hàng</option>
                                            <option>Bảo vệ</option>
                                            <option>Tạp vụ</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <a href="/admin" style={{ float: 'right', fontWeight: 600, color: '#ea0000' }}>Chỉnh sửa nâng cao</a>
                                <br />
                                <br />
                                <button className="btn btn-save" type="button">Lưu lại</button>
                                <a className="btn btn-cancel" data-dismiss="modal" href="/admin">Hủy bỏ</a>
                                <br />
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
