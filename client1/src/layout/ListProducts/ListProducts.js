import className from "classnames/bind";

import Product from "../../components/Product"
import styles from "./ListProducts.module.scss";

const cx = className.bind(styles);

function ListProducts() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Product className="productItem"/>
                <Product className="productItem"/>
                <Product className="productItem"/>
                <Product className="productItem"/>
            </div>
            <div className={cx('btn-more')}>
                <button className={cx('btn')}>Xem thêm</button>
            </div>
        </>
    );
}

export default ListProducts;