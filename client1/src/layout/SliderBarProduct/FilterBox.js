import { useState } from 'react';
import className from 'classnames/bind';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './SliderBarProduct.module.scss';

const cx = className.bind(styles);

function FilterBox({ title, label = [] }) {
    const [show, setShow] = useState(true);
    const [checked, setCheck] = useState([]);

    const handleCheck = (id) => {
        setCheck((prev) => {
            if (checked.includes(id)) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleCheckAll = () => {
        label.forEach((item) => {
            if(checked.length === label.length) {
                setCheck([]);
            } else {
                if(checked.includes(item.id)) {
                    setCheck((prev) => [...prev])
                } else {
                    setCheck((prev) => [...prev, item.id])
                }
            }
        })
    }

    return (
        <div className={cx('box-filter')}>
            <div className={cx('title')} onClick={() => setShow(!show)}>
                {title}
                <ArrowDropUpIcon className={cx('icon', show && 'iconCyrcle')} />
            </div>
            <ul className={cx('items', show && 'show')}>
                <li>
                    <label className={cx('check-label')}>
                        Tất cả
                        <input
                            type="checkbox"
                            checked={checked.length === label.length}
                            className={cx('check-input')}
                            onChange={handleCheckAll}
                        />
                        <span className={cx('checkmark')}></span>
                    </label>
                </li>
                {label.map((item, index) => (
                    <li key={index}>
                        <label className={cx('check-label')}>
                            {item.value}
                            <input
                                type="checkbox"
                                checked={checked.includes(item.id)}
                                className={cx('check-input')}
                                onChange={() => handleCheck(item.id)}
                            />
                            <span className={cx('checkmark')}></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterBox;
