import axios from "axios";
import { useEffect, useState } from "react";
import Helper from "../utility/helper";
import FullScreenLoader from "./FullScreenLoader";

const ProductList = () => {
    const [products,setProducts]=useState(null);
    const [refresh,setRefresh]=useState([]);

    useEffect(()=>{
        (async()=>{
            await callProduct();
        })()
    },[])

    const callProduct= async()=>{
        let res=await axios.get(`${Helper.API_BASE}/product-list`);
        let productLists=res.data['data']
        setProducts(productLists);
    }

    return (
        <div>
            {products==null ? (<FullScreenLoader/>):(
                <div className="container">
                    <div className="row mt-3">
                    {products.map(item => <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card p-3">
                                <img src={item.image} alt="" />
                                <h5>Price :{item.price}</h5>
                                <h3>{item.title}</h3>
                            </div>
                    </div>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;