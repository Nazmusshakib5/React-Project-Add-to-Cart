import AppNavBar from "./AppNavBar";
import Footer from "./Footer";


const MasterLayout = (props) => {
    return (
        <div>
            <AppNavBar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;