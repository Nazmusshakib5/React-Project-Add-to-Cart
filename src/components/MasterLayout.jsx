import AppNavBar from "./AppNavBar";
import Footer from "./Footer";


const MasterLayout = (props) => {
    return (
        <div className="bg-light">
            <AppNavBar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;