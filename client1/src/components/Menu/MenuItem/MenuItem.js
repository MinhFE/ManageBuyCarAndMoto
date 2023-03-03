import { NavLink } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './MenuItem.module.scss';

const cx = className.bind(styles);

function MenuItem({ path, title }) {
    return (
        <div className={cx('wrapper')}>
            <NavLink to={path} className={(nav) => cx('item', {active: nav.isActive})}>
                {title}
            </NavLink>
        </div>
    );
}

export default MenuItem;
