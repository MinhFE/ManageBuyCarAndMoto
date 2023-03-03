import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from './MenuItem';

import config from '../../config';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function Menu({ type }) {

    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleFixed = () => {
            if(window.scrollY > 50) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        }
        window.addEventListener('scroll', handleFixed);

        return () => {
            window.removeEventListener('scroll', handleFixed);
        }
    }, [])

    return (
        <div className={cx('wrapper', {sticky: fixed})}>
            <div className={cx('left')}>
                {type === 'oto' ? (
                    <>
                        <MenuItem path={config.routes.oto_home} title="TRANG CHỦ" />
                        <MenuItem path={config.routes.oto_about} title="GIỚI THIỆU" />
                        <MenuItem path={config.routes.oto_product} title="SẢN PHẨM" />
                        <MenuItem path={config.routes.oto_service} title="DỊCH VỤ" />
                        <MenuItem path={config.routes.oto_promotion} title="KHUYẾN MÃI" />
                        <MenuItem path={config.routes.oto_store} title="CỬA HÀNG" />
                        <MenuItem path={config.routes.oto_news} title="TIN TỨC" />
                        <MenuItem path={config.routes.oto_carees} title="TUYỂN DỤNG" />
                    </>
                ) : (
                    <>
                        <MenuItem path={config.routes.moto_home} title="TRANG CHỦ" />
                        <MenuItem path={config.routes.moto_about} title="GIỚI THIỆU" />
                        <MenuItem path={config.routes.moto_product} title="SẢN PHẨM" />
                        <MenuItem path={config.routes.moto_service} title="DỊCH VỤ" />
                        <MenuItem path={config.routes.moto_promotion} title="KHUYẾN MÃI" />
                        <MenuItem path={config.routes.moto_store} title="CỬA HÀNG" />
                        <MenuItem path={config.routes.moto_news} title="TIN TỨC" />
                        <MenuItem path={config.routes.moto_carees} title="TUYỂN DỤNG" />
                    </>
                )}
                <MenuItem path={config.routes.contact} title="LIÊN HỆ" />
            </div>
            <div className={cx('right')}>
                <form className={cx('form')}>
                    <TextField className={cx('search')} id="standard-basic" label="Tìm kiếm" variant="standard" />
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </form>
                <Link to={config.routes.cart}>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </Link>
                <MenuItem path={config.routes.login} title="ĐĂNG NHẬP" />
                <MenuItem path={config.routes.register} title="ĐĂNG KÝ" />
            </div>
        </div>
    );
}

export default Menu;
