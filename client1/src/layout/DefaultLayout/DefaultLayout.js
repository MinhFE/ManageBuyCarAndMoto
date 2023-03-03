
import Menu from "../../components/Menu";

function DefaultLayout({children, type}) {
    return (
        <div>
            <Menu type={type} />
            <div style={{paddingTop: "65px"}}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;