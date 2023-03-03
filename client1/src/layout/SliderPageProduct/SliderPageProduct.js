import className from 'classnames/bind';

import SliderItem from '../../components/Slide/SliderItem';
import images from '../../assets/images';
import styles from './SliderPageProduct.module.scss';

const cx = className.bind(styles);

function SliderPageProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <SliderItem
                    image={[images.slider_oto_honda, images.slider_oto_civic]}
                    dots={true}
                    objectClassName={{ slideProduct: 'slideProduct', slideWrapper: 'slideWrapper' }}
                />
            </div>
            <div className={cx('right')}>
                <SliderItem image={[images.slider_oto_brio]} />
                <SliderItem image={[images.honda_CRV]} />
            </div>
        </div>
    );
}

export default SliderPageProduct;
