import ServiceItem from "../../../components/ServiceItem";
import images from "../../../assets/images"

const services = [
    {title: "Bảo dưỡng định kỳ", image: images.service_bao_duong},
    {title: "Chính sách bảo hành", image: images.service_chinh_sach},
    {title: "Dịch vụ cứu hộ", image: images.service_cuu_ho},
    {title: "Ứng dụng \"my honda\"", image: images.service_ung_dung},
    {title: "Bảo hiểm", image: images.service_bao_hiem},
    {title: "Tân trang xe", image: images.service_tan_trang},
]

function OtoService() {
    return (
        <div>
            <ServiceItem services={services}/>
        </div>
    );
}

export default OtoService;