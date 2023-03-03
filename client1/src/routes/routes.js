import config from '../config';

import Home from '../pages/Home';
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Cart from "../pages/Cart"
import Search from '../pages/Search';
import ForgotPassword from '../pages/ForgotPassword';
import Pay from "../pages/Pay";
import DetailProduct from '../pages/DetailProduct';
//Oto
import OtoHome from '../pages/OtoPage/OtoHome';
import OtoAbout from '../pages/OtoPage/OtoAbout';
import OtoProduct from '../pages/OtoPage/OtoProduct';
import OtoService from '../pages/OtoPage/OtoService';
import OtoPromotion from '../pages/OtoPage/OtoPromotion';
import OtoStore from '../pages/OtoPage/OtoStore';
import OtoNews from '../pages/OtoPage/OtoNews';
import OtoCarees from '../pages/OtoPage/OtoCarees';
import OtoSearch from '../pages/OtoPage/OtoSearch';
//Moto
import MotoHome from '../pages/MotoPage/MotoHome';
import MotoAbout from '../pages/MotoPage/MotoAbout';
import MotoProduct from '../pages/MotoPage/MotoProduct';
import MotoService from '../pages/MotoPage/MotoService/MotoService';
import MotoPromotion from '../pages/MotoPage/MotoPromotion';
import MotoStore from '../pages/MotoPage/MotoStore';
import MotoNews from '../pages/MotoPage/MotoNews';
import MotoCarees from '../pages/MotoPage/MotoCarees';
import MotoSearch from '../pages/MotoPage/MotoSearch';

export const publicRouter = [
    { path: config.routes.home, component: Home, layout: null },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.search, component: Search },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.pay, component: Pay },
    { path: config.routes.detailt, component: DetailProduct },
    //Oto-path
    { path: config.routes.oto_home, component: OtoHome },
    { path: config.routes.oto_about, component: OtoAbout },
    { path: config.routes.oto_product, component: OtoProduct },
    { path: config.routes.oto_service, component: OtoService },
    { path: config.routes.oto_promotion, component: OtoPromotion },
    { path: config.routes.oto_store, component: OtoStore },
    { path: config.routes.oto_news, component: OtoNews },
    { path: config.routes.oto_carees, component: OtoCarees },
    { path: config.routes.oto_search, component: OtoSearch },
    //Moto-path
    { path: config.routes.moto_home, component: MotoHome },
    { path: config.routes.moto_about, component: MotoAbout },
    { path: config.routes.moto_product, component: MotoProduct },
    { path: config.routes.moto_service, component: MotoService },
    { path: config.routes.moto_promotion, component: MotoPromotion },
    { path: config.routes.moto_store, component: MotoStore },
    { path: config.routes.moto_news, component: MotoNews },
    { path: config.routes.moto_carees, component: MotoCarees },
    { path: config.routes.moto_search, component: MotoSearch },
];

export const privateRouter = [];
