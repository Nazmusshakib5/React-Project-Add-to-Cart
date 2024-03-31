import { Toaster } from "react-hot-toast";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";


const MasterLayout = (props) => {
    return (
        <div className="bg-light">
            <AppNavBar/>
            {props.children}
            <Footer/>
            <Toaster position="top-center"/>
        </div>
    );
};

export default MasterLayout;