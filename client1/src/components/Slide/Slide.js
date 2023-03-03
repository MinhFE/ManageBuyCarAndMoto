import className from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import {Link} from "react-router-dom"
import styles from './Slide.module.scss';
import images from '../../assets/images';
import "./Slide.css"

const cx = className.bind(styles);

function Slide() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider className={cx('wrapper')} {...settings}>
            <div className={cx('slide')}>
                <img className={cx('image')} src={images.slider_moto} alt="" />
                <div className={cx('item')}>
                    <h2 className={cx('name')}>XE MÁY</h2>
                    <Link to={"/home-moto"}>
                        <span className={cx('btn-discover')}>KHÁM PHÁ NGAY</span>
                    </Link>
                </div>
            </div>
            <div className={cx('slide')}>
                <img className={cx('image')} src={images.slider_oto} alt="" />
                <div className={cx('item')}>
                    <h2 className={cx('name')}>Ô TÔ</h2>
                    <Link to={"/home-oto"}>
                        <span className={cx('btn-discover')}>KHÁM PHÁ NGAY</span>
                    </Link>
                </div>
            </div>
        </Slider>
    );
}

export default Slide;
