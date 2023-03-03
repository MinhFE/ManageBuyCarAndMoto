import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import Input from '../../components/Input';

import config from '../../config';
import styles from './ForgotPassword.module.scss';

const cx = className.bind(styles);


function ForgotPassword() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Lấy Lại Mật Khẩu</h1>
            <div className={cx('form')}>
                <Input type="email" placeholder="Địa chỉ email "/>
                <button className={cx('btn')}>Lấy lại mật khẩu</button>
                <p>
                    Quay lại trang đăng nhập. <Link to={config.routes.login} className={cx('forget')}>Đăng nhập</Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;