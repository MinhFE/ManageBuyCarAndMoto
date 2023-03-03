import className from "classnames/bind";

import styles from "./ResultSearch.module.scss"

const cx = className.bind(styles);

function ResultSearch() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>HONDA OTO QUẢNG NAM - TAM KỲ</h3>
            <p className={cx('address')}>QL1A, Khối phố Hòa Tây, Tam kỳ, Quảng Nam</p>
            <a href="tel:02363.566.887"><b>Bán hàng:</b> 02363.566.887</a>
            <a href="tel:02363.566.887"><b>Dịch vụ:</b> 02363.566.887</a>
        </div>
    );
}

export default ResultSearch;