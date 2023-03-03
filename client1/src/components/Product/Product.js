import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './Product.module.scss';

const cx = className.bind(styles);

function Product({className}) {
    return (
        <Link to="#" className={cx('wrapper', className)}>
            <img
                src="http://tienthu.vn/uploads/products/351/thumbnail/honda-cr-v-e_3.png"
                className={cx('image')}
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>Honda CR-V E</p>
                <p className={cx('price')}>Giá bán: 998,000,000 đ</p>
            </div>
            <div className={cx('label')}>
                Giảm giá
            </div>
        </Link>
    );
}

export default Product;
