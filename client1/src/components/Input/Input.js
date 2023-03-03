import { useState } from 'react';
import className from 'classnames/bind';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from './Input.module.scss';

const cx = className.bind(styles);

function Input({ type = "text", placeholder }) {
    const [show, setShow] = useState(false);
    const [typeInput, setTypeInput] = useState("password")

    const handleShow = () => {
        setShow(true);
        setTypeInput("text");
    }

    const handleHide = () => {
        setShow(false);
        setTypeInput("password");
    }

    return (
        <div className={cx('wrapper')}>
            {type === 'password' ? (
                <>
                    <input type={typeInput} className={cx('input')} placeholder={placeholder} required />
                    <div className={cx('icon')}>{show ? 
                        <VisibilityIcon onClick={handleHide}/> : 
                        <VisibilityOffIcon onClick={handleShow}/>}
                    </div>
                </>
            ) : (
                <input type={type} className={cx('input')} placeholder={placeholder} required />
            )}
        </div>
    );
}

export default Input;
