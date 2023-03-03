import axios from 'axios';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import DropDown from '../../components/DropDown';
import ResultSearch from '../../components/ResultSearch';

import styles from './SearchStore.module.scss';

const cx = className.bind(styles);

function SearchStore() {
    const [provinces, setProvinces] = useState([]);
    const [district, setDistrict] = useState([]);

    const getProvices = async () => {
        try {
            const options = {
                method: 'get',
                url: 'https://provinces.open-api.vn/api/?depth=2',
            };

            const response = await axios(options);

            setProvinces(response.data);
        } catch (error) {}
    };

    useEffect(() => {
        getProvices();
    }, []);

    const getCity = (city) => {
        console.log(city.districts);

        setDistrict(city.districts);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Tìm cửa hàng gần bạn</h1>
            <div className={cx('search')}>
                <div className={cx('dropdown')}>
                    <DropDown title="Thành Phố/ Tỉnh" list={provinces} getCity={getCity} />
                    <DropDown title="Quận/Huyện" list={district} getCity={getCity} />
                </div>
                <button className={cx('btn-search')}>Tìm kiếm</button>
            </div>
            <div className={cx('result')}>
                <div className={cx('list-result')}>
                    <ResultSearch />
                </div>
                <div className={cx('map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.007657013847!2d108.463641914026!3d15.591239756212929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dde615552213%3A0x72514148f7b07626!2zSG9uZGEgw5R0w7QgVGnhur9uIFRodSBRdeG6o25nIE5hbSAtIFRhbSBL4buz!5e0!3m2!1svi!2s!4v1661784829923!5m2!1svi!2s"
                        width="600"
                        height="450"
                        title="maps"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default SearchStore;
