import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import className from 'classnames/bind';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from './NewItem.module.scss';

const cx = className.bind(styles);

function NewItem({location}) {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://tienthu.vn/uploads/articles/230/thumbnail/tran-trong-chao-don-cac-dai-ly-o-to-honda-toan-quoc-den-tham-quan-showroom-honda-oto-da-nang-cam-le_1.jpg"
                className={cx('image')}
                alt=""
            />
            <h1 className={cx('title')}>
                Trân trọng chào đón các Đại Lý Ô tô Honda trên toàn quốc đến tham quan Showroom Honda Ô tô Đà Nẵng - Cẩm
                Lệ
            </h1>
            {location && (
                <div className={cx('location')}>
                    <LocationOnIcon className={cx('icon')}/>
                    {location}
                </div>
            )}
            <p className={cx('date')}>
                <EventAvailableIcon className={cx('icon')}/>
                04.06.2022
            </p>
        </div>
    );
}

export default NewItem;
