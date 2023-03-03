import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import className from 'classnames/bind';

import config from '../../config';
import styles from './HeaderMain.module.scss';
import images from '../../assets/images';

const cx = className.bind(styles);

function HeaderMain({ onChangeType }) {
    const [type, setType] = useState('');
    // const onChangeOto = (e) => {
    //     e.preventDefault();
    //     setType("oto")
    //     onChangeType(type);
    // }

    // const onChangeMoto = (e) => {
    //     e.preventDefault();
    //     setType("moto")
    //     onChangeType(type);
    // }
    // onChangeType(type);
    useEffect(() => {
        onChangeType(type);
    }, [type, onChangeType]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left', 'item')} onClick={() => setType('oto')}>
                <NavLink className={cx('oto')} to={config.routes.oto_home}>
                    <img className={cx('image-oto')} src={images.oto} alt="oto" />
                    <span className={cx('name-oto')}>Ô TÔ</span>
                </NavLink>
            </div>
            <div className={cx('center')}>
                <Link className={cx('logo')} to="/">
                    <img className={cx('image-logo')} src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className={cx('right', 'item')}>
                <NavLink className={cx('moto')} to={config.routes.moto_home} onClick={() => setType('moto')}>
                    <span className={cx('name-moto')}>XE MÁY</span>
                    <img className={cx('image-moto')} src={images.xemay} alt="xe may" />
                </NavLink>
            </div>
        </div>
    );
}

export default HeaderMain;
