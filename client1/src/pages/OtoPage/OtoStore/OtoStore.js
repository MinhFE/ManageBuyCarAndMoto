import SliderItem from "../../../components/Slide/SliderItem";
import images from "../../../assets/images"
import SearchStore from "../../../layout/SearchStore";

const image = [images.banner_store]

function OtoStore() {
    return (
        <div style={{width: "1140px", margin: "0 auto"}}>
            <SliderItem image={image}/>
            <SearchStore />
        </div>
    );
}

export default OtoStore;