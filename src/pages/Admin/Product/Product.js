import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ElementButton from './ElementButton/ElementButton'
import TableData from './TableData/TableData'

export default function Product() {
    return (
        <div>
        <Header/>
        <Navbar/>
            <div>
                <main className="app-content">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb side">
                            <li className="breadcrumb-item active"><a href="/admin"><b>Danh sách sản phẩm</b></a></li>
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
                {/*
  MODAL
*/}
                <div className="modal fade" id="ModalUP" tabIndex={-1} role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-group  col-md-12">
                                        <span className="thong-tin-thanh-toan">
                                            <h5>Chỉnh sửa thông tin sản phẩm cơ bản</h5>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Mã sản phẩm </label>
                                        <input className="form-control" type="number" defaultValue={71309005} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Tên sản phẩm</label>
                                        <input className="form-control" type="text" required defaultValue="Bàn ăn gỗ Theresa" />
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label className="control-label">Số lượng</label>
                                        <input className="form-control" type="number" required defaultValue={20} />
                                    </div>
                                    <div className="form-group col-md-6 ">
                                        <label htmlFor="exampleSelect1" className="control-label">Tình trạng sản phẩm</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>Còn hàng</option>
                                            <option>Hết hàng</option>
                                            <option>Đang nhập hàng</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="control-label">Giá bán</label>
                                        <input className="form-control" type="text" defaultValue="5.600.000" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleSelect1" className="control-label">Danh mục</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>Bàn ăn</option>
                                            <option>Bàn thông minh</option>
                                            <option>Tủ</option>
                                            <option>Ghế gỗ</option>
                                            <option>Ghế sắt</option>
                                            <option>Giường người lớn</option>
                                            <option>Giường trẻ em</option>
                                            <option>Bàn trang điểm</option>
                                            <option>Giá đỡ</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <a href="/admin" style={{ float: 'right', fontWeight: 600, color: '#ea0000' }}>Chỉnh sửa sản phẩm nâng cao</a>
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
