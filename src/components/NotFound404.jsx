import MasterLayout from "./MasterLayout";

const NotFound404 = () => {
    return (
        <MasterLayout>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <h3>Error 404 </h3>
                        <h2>Page Not Found</h2>
                    </div>
                </div>
            </div>
            
        </MasterLayout>
    );
};

export default NotFound404;