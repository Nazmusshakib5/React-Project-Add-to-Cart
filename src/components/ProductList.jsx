import axios from "axios";
import { useEffect, useState } from "react";
import Helper from "../utility/helper";
import FullScreenLoader from "./FullScreenLoader";
import toast from "react-hot-toast";
//remove the line below
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products,setProducts]=useState(null);
    const [refresh,setRefresh]=useState(false);
    //remove the line below
    const navigate=useNavigate();

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

    const addToCartBtn= async(id)=>{
        try{
            setRefresh(true)
            let res=await axios.get(`${Helper.API_BASE}/create-cart/${id}`,Helper.addHeader());
            setRefresh(false)
            if(res.data['msg']==='success'){
                toast.success('Added to Cart')
            }else{
                toast.error('Failed to add')
            }

        }catch(e){
            // Helper.unauthorized(e.response.status)
            //remove the line below
            navigate('/login');
        }

    }

    return (
        <div>
            {products==null || refresh ? (<FullScreenLoader/>):(
                <div className="container">
                    <div className="row mt-3">
                    {products.map(item => <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card p-3">
                                <img src={item.image} alt="" />
                                <h5>Price :{item.discount?(<span><strike className='me-2'>{item.price} </strike><span>{
                                    item.discount_price}</span></span>):(item.price)}</h5>
                                <h3>{item.title}</h3>
                                <button onClick={()=>{addToCartBtn(item['id'])}} className="btn btn-outline-danger mt-2">Add to Cart</button>
                            </div>
                    </div>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;