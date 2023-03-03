import images from '../../../assets/images';
import config from '../../../config';
import SliderItem from '../../../components/Slide/SliderItem';
import MenuTool from '../../../components/MenuTool';
import SliderProduct from '../../../components/Slide/SliderProduct';
import MenuBrand from '../../../components/Menu/MenuBrand';

function OtoHome() {
    const image = [
        images.slider_oto_honda,
        images.oto_gift,
        images.promotion_oto,
        images.slider_oto_civic,
        images.honda_CRV,
        images.slider_oto_brio,
    ];
    const path = {
        service: config.routes.oto_service,
    };

    const logos = [
        images.honda_logo
    ]

    return (
        //style={{ marginTop: '65px' }}
        <div> 
            <SliderItem image={image} dots={false} />
            <MenuTool path={path} />
            <SliderProduct title="SẢN PHẨM NỔI BẬT" />
            <MenuBrand logos={logos}/>
            <SliderProduct title="SẢN PHẨM UƯ ĐÃI" />
            <MenuBrand logos={logos}/>
        </div>
    );
}

export default OtoHome;
