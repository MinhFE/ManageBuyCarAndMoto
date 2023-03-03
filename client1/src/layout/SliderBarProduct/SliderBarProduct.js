import className from 'classnames/bind';
import FilterBox from './FilterBox';

import styles from './SliderBarProduct.module.scss';

const cx = className.bind(styles);

function SliderBarProduct() {
    return (
        <div className={cx('wrapper')}>
            <FilterBox
                title="Hãng xe"
                label={[
                    { id: 'honda', value: 'Honda' },
                    { id: 'toyota', value: 'Toyota' },
                ]}
            />
            <FilterBox
                title="Số cửa"
                label={[
                    { id: '5cua', value: '5 cửa' },
                    { id: '4cua', value: '4 cửa' },
                ]}
            />
            <FilterBox
                title="Số chỗ"
                label={[
                    { id: '8cho', value: '8 chỗ' },
                    { id: '7cho', value: '7 chỗ' },
                    { id: '5cho', value: '5 chỗ' },
                    { id: '4cho', value: '4 chỗ' },
                    { id: '2cho', value: '2 chỗ' },
                ]}
            />
            <FilterBox
                title="Nhiên liệu"
                label={[
                    { id: 'hybrid', value: 'Hibrid' },
                    { id: 'dau', value: 'Dầu' },
                    { id: 'dien', value: 'Điện' },
                    { id: 'xang', value: 'Xăng' },
                ]}
            />
            <FilterBox
                title="Hộp số"
                label={[
                    { id: 'sohonhop', value: 'Số hỗn hợp' },
                    { id: 'sotudong', value: 'Số tự động' },
                    { id: 'sosan', value: 'Số sàn' },
                ]}
            />
        </div>
    );
}

export default SliderBarProduct;
