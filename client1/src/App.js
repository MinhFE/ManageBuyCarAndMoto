import className from 'classnames/bind';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderMain from './layout/HeaderMain';
import { publicRouter } from './routes';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';
import Footer from './layout/Footer';
import styles from './App.module.scss';

const cx = className.bind(styles);

function App() {
    const [changeType, setChangeType] = useState('');

    const onChangeType = (type) => {
        setChangeType(type);
    };  

    return (
        <Router>
            <div className={cx('container')}>
                <HeaderMain onChangeType={onChangeType} />
                <Routes>
                    {publicRouter.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout === Fragment ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Layout type={changeType}>
                                            <Page />
                                        </Layout>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
