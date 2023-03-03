import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import className from 'classnames/bind';

import DropDown from '../../components/DropDown';
import Input from '../../components/Input';
import config from '../../config';
import styles from './Pay.module.scss';

const cx = className.bind(styles);

const listPay = [
    { id: 'cod', name: 'Thanh toán tại nhà COD' },
    { id: 'vnpay', name: 'Thanh toán VNPAY' },
];

const listDeli = [
    { id: 'home', name: 'Giao xe tại nhà' },
    { id: 'store', name: 'Nhận xe tại cửa hàng' },
];

function Cart() {
    const [pay, setPay] = useState();
    const [delivery, setDelivery] = useState();
    const [provinces, setProvinces] = useState([]);
    const [district, setDistrict] = useState([]);

    const getProvices = async () => {
        try {
            const options = {
                method: 'get',
                url: 'https://provinces.open-api.vn/api/?depth=2',
            };

            const response = await axios(options);

            setProvinces(response.data);
        } catch (error) {}
    };

    useEffect(() => {
        getProvices();
    }, []);

    const getCity = (city) => {
        console.log(city.districts);

        setDistrict(city.districts);
    };

    const handleRadioPay = (id) => {
        setPay(id);
    };

    const handleRadioDeli = (id) => {
        setDelivery(id);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>THÔNG TIN THANH TOÁN</h1>
            <div className={cx('contain')}>
                <div className={cx('info')}>
                    <div className={cx('info_user')}>
                        <h1 className={cx('title')}>1. THÔNG TIN NGƯỜI MUA, THANH TOÁN</h1>
                        <p className={cx('description')}>
                            Nếu bạn đã có tài khoản, <Link to={config.routes.login}>đăng nhập</Link> để thanh toán
                        </p>
                        <div className={cx('user')}>
                            <Input placeholder="Họ tên(*)" />
                            <Input placeholder="Số điện thoại(*)" />
                        </div>
                        <Input type="email" placeholder="Email(*)" />
                        <Input placeholder="Địa chỉ của bạn(*)" />
                        <div className={cx('dropdown')}>
                            <DropDown title="Thành Phố/ Tỉnh" list={provinces} getCity={getCity} />
                            <DropDown title="Quận/Huyện" list={district} getCity={getCity} />
                        </div>
                        <div className={cx('message')}>
                            <p>Lời nhắn</p>
                            <textarea />
                        </div>
                    </div>
                    <div className={cx('info_user')}>
                        <h1 className={cx('title')}>2. THÔNG TIN CHỦ XE, ĐĂNG KÝ BIỂN SỐ</h1>
                        <div className={cx('user')}>
                            <Input placeholder="Họ tên(*)" />
                            <Input placeholder="Số điện thoại(*)" />
                        </div>
                        <div className={cx('cccd_date')}>
                            <Input placeholder="CMND/CCCD(*)" />
                            <DropDown list={provinces} title="Thành Phố/ Tỉnh" getCity={getCity}/>
                            <Input type="date" placeholder="dd" />
                        </div>
                        <Input type="email" placeholder="Email(*)" />
                        <Input placeholder="Hộ khẩu thường trú(*)" />
                        <div className={cx("dropdown")}>
                            <DropDown title="Thành Phố/ Tỉnh" list={provinces} getCity={getCity} />
                            <DropDown title="Quận/Huyện" list={district} getCity={getCity} />
                        </div>
                    </div>
                    <div className={cx('pay_delivery')}>
                        <div className={cx('payments')}>
                            <h1 className={cx('title')}>3. HÌNH THỨC THANH TOÁN</h1>
                            {listPay.map((payItem) => (
                                <div className={cx('COD')} key={payItem.id}>
                                    <input
                                        type="radio"
                                        checked={pay === payItem.id}
                                        id={payItem.id}
                                        value={pay}
                                        onChange={() => handleRadioPay(payItem.id)}
                                    />
                                    <label htmlFor={payItem.id}>{payItem.name}</label>
                                </div>
                            ))}
                        </div>
                        <div className={cx('delivery')}>
                            <h1 className={cx('title')}>4. HÌNH THỨC GIAO HÀNG</h1>
                            {listDeli.map((deli) => (
                                <div className={cx('COD')} key={deli.id}>
                                    <input
                                        type="radio"
                                        checked={delivery === deli.id}
                                        id={deli.id}
                                        onChange={() => handleRadioDeli(deli.id)}
                                    />
                                    <label htmlFor={deli.id}>{deli.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('order')}>
                    <h1 className={cx('title')}>THÔNG TIN ĐƠN HÀNG</h1>
                    <div className={cx('order-row')}>
                        <img
                            className={cx('image')}
                            src="https://tienthu.vn/uploads/products/712/thumbnail/hilux-2-8l-4x4-at-adventure.png"
                            alt=""
                        />
                        <div className={cx('info_car')}>
                            <h3 className={cx('name_car')}>HONDA CR-V</h3>
                            <span>Màu sắc: Đỏ 3T6</span>
                            <span>Đơn giá: 799,000,000 đ</span>
                        </div>
                    </div>
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
                    <button className={cx('pay')}>Thanh toán</button>
                    <Link to={config.routes.moto_product} className={cx('buy')}>
                        Tiếp tục mua hàng
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
