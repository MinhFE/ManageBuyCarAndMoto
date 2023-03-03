import {Link} from 'react-router-dom'
import className from 'classnames/bind';
import Input from '../../components/Input';

import config from '../../config'
import styles from './Login.module.scss';

const cx = className.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Đăng Nhập</h1>
            <div className={cx('form')}>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Mật khẩu"/>
                <Link to={config.routes.forgot_password} className={cx('forget')}>Quên mật khẩu ?</Link>
                <button className={cx('btn')}>Đăng Nhập</button>
                <p>
                    Bạn chưa có tài khoản? <Link to={config.routes.register} className={cx('forget')}>Đăng ký ngay</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
