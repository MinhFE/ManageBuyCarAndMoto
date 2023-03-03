import {Link} from 'react-router-dom';
import className from 'classnames/bind';
import ClearIcon from '@mui/icons-material/Clear';

import config from '../../config';
import styles from './Cart.module.scss';

const cx = className.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>THÔNG TIN ĐƠN HÀNG</h1>
            <div className={cx('contain')}>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <th>Xóa</th>
                                <th>Hình ảnh</th>
                                <th>Thông tin</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Tổng giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <ClearIcon className={cx('icon')} />
                                </td>
                                <td>
                                    <img
                                        className={cx('image')}
                                        src="http://tienthu.vn/uploads/products/351/thumbnail/honda-cr-v-e_3.png"
                                        alt=""
                                    />
                                </td>
                                <td className={cx('name')}>
                                    <h3 className={cx('name')}>Honda CR-V</h3>
                                    <p className={cx('color')}>Màu sắc: Trắng ngọc trinh</p>
                                </td>
                                <td>913,000,000 đ</td>
                                <td>
                                    <div className={cx('quantity')}>
                                        <span className={cx('minus')}>-</span>
                                        <input type="text" className={cx('input')} value="1" />
                                        <span className={cx('plus')}>+</span>
                                    </div>
                                </td>
                                <td>913,000,000 VND</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={cx('promotion')}>
                        <p className={cx('promotion-title')}>Mã khuyến mãi</p>
                        <input type="text" className={cx('promotion-input')} placeholder="Nhập mã khuyến mãi" />
                        <button className={cx('promotion-done')}>Xong</button>
                    </div>
                </div>
                <div className={cx('order')}>
                    <h1 className={cx('title')}>TỔNG ĐƠN HÀNG</h1>
                    <div className={cx('order-row')}>
                        <span className={cx('price')}>GIÁ XE</span>
                        <span className={cx('number')}>913,000,000 VND</span>
                    </div>
                    <div className={cx('order-row')}>
                        <span className={cx('price')}>GIẢM GIÁ</span>
                        <span className={cx('number')}>0 VND</span>
                    </div>
                    <div className={cx('order-row')}>
                        <span className={cx('price')}>TỔNG TIỀN:</span>
                        <span className={cx('number-sum')}>913,000,000 VND</span>
                    </div>
                    <p className={cx('description')}>(*)Giá xe chưa bao gồm chi phí làm biển số</p>
                    <Link to={config.routes.pay}className={cx('pay')}>Thanh toán</Link>
                    <Link to={config.routes.moto_product} className={cx('buy')}>Tiếp tục mua hàng</Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
