import className from 'classnames/bind';
import AccordionChild from './AccordionChild';

import styles from './AccordionItem.module.scss';

const cx = className.bind(styles);

function AccordionItem() {

    const items = [
        {title: 'Về tiến thu', content: 'no data'},
        {title: 'Lịch sử hình thành', content: 'no data'},
        {title: 'Hoạt động xã hội', content: 'no data'},
        {title: 'Chứng nhân và giải thưởng', content: 'no data'},
        {title: 'Công ty thành viên', content: 'no data'},
        {title: 'Đối tác', content: 'no data'},
    ]

    return (
        <div className={cx('wrapper')}>
            <AccordionChild items={items} />
        </div>
    );
}

export default AccordionItem;
