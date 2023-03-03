import className from "classnames/bind";
import SearchIcon from '@mui/icons-material/Search';

import styles from "./FilterBar.module.scss";

const cx = className.bind(styles);

function FilterBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <div className={cx('item')}>BÁN CHẠY NHẤT</div>
                <div className={cx('item')}>GIÁ THẤP</div>
                <div className={cx('item')}>GIÁ CAO</div>
                <div className={cx('item')}>ƯU ĐÃI</div>
                <div className={cx('item')}>TRẢ GÓP 0%</div>
            </div>
            <form className={cx('form-search')}>
                <button className={cx('btn-search')}>
                    <SearchIcon className={cx('icon')} />
                </button>
                <input type="text" className={cx('input-search')} placeholder="Enter search..."/>
            </form>
        </div>
    );
}

export default FilterBar;