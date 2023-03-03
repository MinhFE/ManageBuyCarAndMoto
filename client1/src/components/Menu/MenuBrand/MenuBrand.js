import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './MenuBrand.module.scss';

const cx = className.bind(styles);

function MenuBrand({ logos = [], className}) {
    return (
        <div className={cx('wrapper', className)}>
            {logos.map((logo, index) => (
                <Link to="#" className={cx('link')} key={index}>
                    <img src={logo} alt={logo} className={cx('image')}/>
                </Link>
            ))}
        </div>
    );
}

export default MenuBrand;
