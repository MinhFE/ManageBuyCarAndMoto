import images from "../../../assets/images"
import PromotionBanner from "../../../layout/PromotionBanner/PromotionBanner";

const image = {
    boctham_doc: images.promotion_boctham_doc,
    boctham_ngang: images.promotion_boctham_ngang,
    giamgia_doc: images.promotion_giamgia_doc,
    giamgia_ngang: images.promotion_giamgia_ngang,
}

function OtoPromotion() {
    return (
        <PromotionBanner image={image}/>
    );
}

export default OtoPromotion;