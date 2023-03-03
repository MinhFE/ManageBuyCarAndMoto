import className from 'classnames/bind';
import Input from '../../components/Input';

import styles from './Register.module.scss';

const cx = className.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Đăng Ký Tài Khoản</h1>
            <div className={cx('form')}>
                <Input type="text" placeholder="Họ *"/>
                <Input type="text" placeholder="Tên *"/>
                <Input type="email" placeholder="Email *"/>
                <Input type="password" placeholder="Mật khẩu *"/>
                <Input type="password" placeholder="Nhập lại mật khẩu *"/>
                <Input type="text" placeholder="Số điện thoại *"/>
                <Input type="text" placeholder="Địa chỉ *"/>
                <button className={cx('btn')}>Đăng Ký</button>
            </div>
        </div>
    );
}

export default Register;