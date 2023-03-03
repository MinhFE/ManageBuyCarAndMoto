import images from "../../../assets/images"
import Accordion from "../../../components/AccordionItem";
import SliderItem from '../../../components/Slide/SliderItem'

function OtoAbout() {

    const image = [images.slider_oto_about]

    return (
        <>
            <SliderItem image={image} className={"slideAbout"}/>
            <Accordion />
        </>
    );
}

export default OtoAbout;