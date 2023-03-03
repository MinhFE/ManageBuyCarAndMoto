import {Link} from 'react-router-dom'
import className from 'classnames/bind';
import Slider from 'react-slick';

import styles from './SliderProduct.module.scss';
import Product from '../../Product';

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const cx = className.bind(styles);

function SliderProduct({title,}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>{title}</h1>
                <Link to="/" className={cx('link')}>Xem tất cả sản phẩm</Link>
            </div>
            <Slider {...settings} className={cx('slider')}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </div>
    );
}

export default SliderProduct;
