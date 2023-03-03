import className from 'classnames/bind';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import styles from './DropDown.module.scss';

const cx = className.bind(styles);

function DropDown({ list = [], className, getCity, title }) {
    const [label, setLabel] = useState('');
    console.log(label);

    const handleChange = (e) => {
        setLabel(e.target.value);
    };

    const handleChangeProvices = (name) => {
        if (name.phone_code) {
            getCity(name);
        } else {
            return;
        }
    };

    return (
        <FormControl className={cx('wrapper', className)} >
            <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
            <Select
                className={cx('select')}
                defaultValue=""
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={label}
                // label="Age"
                onChange={handleChange}
            >
                {list.map((name, index) => (
                    <MenuItem key={index} value={name.name} onClick={() => handleChangeProvices(name)}>
                        {name.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default DropDown;
