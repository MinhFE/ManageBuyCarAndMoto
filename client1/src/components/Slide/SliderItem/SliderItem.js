import Slider from 'react-slick';
import className from 'classnames/bind';
import styles from './SliderItem.module.scss';

const cx = className.bind(styles);

function SliderItem({ image = [], dots, className, objectClassName={} }) {

    const settings = {
        dots: dots,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className={cx('wrapper', objectClassName.slideWrapper)}>
            {image.map((img, index) => (
                <div key={index} className={cx('item')}>
                    <img src={img} className={cx('image', className, objectClassName.slideProduct)} alt=""/>
                </div>
            ))}
        </Slider>
    );
}

export default SliderItem;
