import className from "classnames/bind";

import styles from "./ServiceItem.module.scss";

const cx = className.bind(styles);

function ServiceItem({services}) {
    return (
        <div className={cx('wrapper')}>
            {services.map((service, index) => (
                <div className={cx('item')} key={index}>
                    <img src={service.image} className={cx('image')} alt={service.title} />
                    <h2 className={cx('title')}>{service.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default ServiceItem;