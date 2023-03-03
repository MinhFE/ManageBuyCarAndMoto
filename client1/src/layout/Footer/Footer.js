import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '../../assets/images';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const cx = className.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrapper')}>
                <div className={cx('info')}>
                    <img src={images.logo} alt="tien-thu" />
                    <p>179 Phan Châu Trinh, Quận Hải Châu, Tp.Đà Nẵng</p>
                    <a href="tel:02363.566.887">Hotline: 02363.566.887</a>
                    <a href="mailto:phandinhminh16082001@gmail.com">Email: phandinhminh16082001@gmail.com</a>
                    <a href="https://tienthu.com.vn/">Website: tienthu.com.vn</a>
                    <a className={cx('icon-link')} href="https://www.facebook.com/phan.minh.5099940/">
                        <FacebookIcon className={cx('icon')} />
                    </a>
                    <a className={cx('icon-link')} href="https://www.youtube.com/channel/UCVX28kx9FgwrdLjrI4OaPsQ">
                        <YouTubeIcon className={cx('icon')} />
                    </a>
                </div>
                <div className={cx('store-moto')}>
                    <h3 className={cx('title')}>Hệ thống cửa hàng xe máy</h3>
                    <p>Giờ mở cửa: 07h30-17h30 từ Thứ Hai-Chủ Nhật</p>
                    <p>Điện thoại:</p>
                    <a href="tel:0905.042.255">
                        <PhoneEnabledIcon className={cx('icon')}/>
                        Bán hàng: 0905.042.255
                    </a>
                    <a href="tel:02363.566.887">
                        <PhoneEnabledIcon className={cx('icon')}/>
                        Dịch vụ: 02363.566.887
                    </a>
                    <a href="https://tienthu.com.vn/">Website: tienthu.com.vn</a>
                    <div
                        className="fb-page"
                        data-href="https://www.facebook.com/xemaytienthu/"
                        // data-tabs="timeline"
                        data-width="380"
                        data-height="140"
                        data-small-header="false"
                        data-adapt-container-width="false"
                        data-hide-cover="false"
                        data-show-facepile="false"
                    >
                        <blockquote cite="https://www.facebook.com/xemaytienthu/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/xemaytienthu/">Xe Máy Tiến Thu</a>
                        </blockquote>
                    </div>
                </div>
                <div className={cx('store-oto')}>
                    <h3 className={cx('title')}>Hệ thống cửa hàng ô tô</h3>
                    <Link to="/store-oto">Honda Ôtô Đà Nẵng - Cẩm Lệ</Link>
                    <Link to="/store-oto">Honda Ôtô Quảng Nam - Tam Kỳ</Link>
                    <Link to="/store-oto">Toyota Tiến Thu - Quảng Ngãi</Link>
                </div>
            </div>
            <p className={cx('copyright')}>
                © 2020 - Công ty TNHH Tiến Thu. GPĐKKD: 0400126575 do Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng Phòng Đăng
                Ký Kinh Doanh cấp
            </p>
        </footer>
    );
}

export default Footer;
