import className from 'classnames/bind';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import images from '../../assets/images';
import styles from './Contact.module.scss';

const cx = className.bind(styles);

const top100Films = [{ label: 'Dịch vụ' }, { label: 'Bán hàng' }];

function Contact() {
    return (
        <form className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img src={images.contact} className={cx('image')} alt="contact" />
            </div>
            <div className={cx('form')}>
                <h1 className={cx('title')}>Liên hệ với chúng tôi</h1>
                <p className={cx('description')}>
                    Xin quý khách vui lòng để lại thông tin cần hỗ trợ, chúng tôi sẽ liên hệ lại trong thời gian sớm
                    nhất
                </p>
                <div className={cx('info')}>
                    <input required={true} type="text" className={cx('input')} placeholder="Họ tên" />
                    <input required={true} type="text" className={cx('input')} placeholder="Số điện thoại"/>
                </div>
                <input required={true} type="email" className={cx('input','input-email')} placeholder="Email của bạn"/>
                <Autocomplete
                    disablePortal
                    className={cx('dropdown')}
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Chủ đề gởi" />}
                />
                <p className={cx('description')}>Nhập nội dung gởi</p>
                <textarea className={cx('input-area')}></textarea>
                <p className={cx('description')}>Vui lòng xác nhận</p>
                <form action="?" method="POST">
                    <div className="g-recaptcha" data-sitekey="6Lc_MsAhAAAAAHcoSXaxOtf00BGwAOOY0bYBq0Bj"></div>
                </form>
                <button className={cx('btn-submit')}>Gửi ngay</button>
            </div>
        </form>
    );
}

export default Contact;
