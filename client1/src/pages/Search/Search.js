import ListProducts from "../../layout/ListProducts"
import SliderPageProduct from "../../layout/SliderPageProduct";

function Search() {
    return (
        <div style={{padding: "0 80px", marginBottom: "50px"}}>
            <SliderPageProduct />
            <ListProducts />
        </div>
    );
}

export default Search;