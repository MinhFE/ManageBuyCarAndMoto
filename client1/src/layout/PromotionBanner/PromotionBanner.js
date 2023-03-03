import className from 'classnames/bind';

import styles from './PromotionBanner.module.scss';

const cx = className.bind(styles);

function PromotionBanner({ image }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img src={image.boctham_doc} className={cx('image')} alt="" />
            </div>
            <div className={cx('center')}>
                <img src={image.boctham_ngang} className={cx('image')} alt="" />
                <img src={image.giamgia_ngang} className={cx('image')} alt="" />
            </div>
            <div className={cx('right')}>
                <img src={image.giamgia_doc} className={cx('image')} alt="" />
            </div>
        </div>
    );
}

export default PromotionBanner;
