import MenuBrand from "../../../components/Menu/MenuBrand";
import SliderBarProduct from "../../../layout/SliderBarProduct";
import SliderPageProduct from "../../../layout/SliderPageProduct";
import images from "../../../assets/images"
import FilterBar from "../../../components/FilterBar";
import ListProducts from "../../../layout/ListProducts";

const logos = [
    images.honda_logo,
    images.toyota_logo,
]

function OtoProduct() {
    return (
        <div style={{padding: "0 80px", marginBottom: "50px"}}>
            <SliderPageProduct />
            <div style={{display: "flex", marginTop: "30px"}}>
                <SliderBarProduct />
                <div style={{marginLeft: "20px", width: "100%"}}>
                    <MenuBrand logos={logos} className="container"/>
                    <FilterBar />
                    <ListProducts />
                </div>
            </div>
        </div>
    );
}

export default OtoProduct;