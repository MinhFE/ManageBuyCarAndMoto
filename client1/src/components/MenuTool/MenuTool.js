import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './MenuTool.module.scss';
import images from '../../assets/images';

const cx = className.bind(styles);

function MenuTool({ path }) {
    const itemTools = [
        { path: path.service, image: images.icon_sua_chua, name: 'Sửa Chữa' },
        { path: path.service, image: images.icon_bao_duong, name: 'Bảo Dưỡng' },
        { path: path.service, image: images.icon_tan_trang, name: 'Tân Trang' },
        { path: path.service, image: images.icon_bao_hanh, name: 'Bảo Hành' },
        { path: path.service, image: images.icon_thay_nhot, name: 'Thay Nhớt' },
        { path: path.service, image: images.icon_cuu_ho, name: 'Cứu hộ' },
    ];
    return (
        <div className={cx('wrapper')}>
            {itemTools.map((tool, index) => (
                <Link to={tool.path} className={cx('item')} key={index}>
                    <img src={tool.image} alt={tool.name} className={cx('image')} />
                    <p className={cx('name')}>{tool.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default MenuTool;
