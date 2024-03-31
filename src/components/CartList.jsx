import axios from "axios";
import { useEffect, useState } from "react";
import Helper from "../utility/helper";
import FullScreenLoader from "./FullScreenLoader";
import toast from "react-hot-toast";


const CartList = () => {

    const [products,setProducts]=useState(null);
    const [refresh,setRefresh]=useState(false);

    useEffect(()=>{
        (async()=>{
            await callProduct();
        })()
    },[products])

    const callProduct= async()=>{
        let res=await axios.get(`${Helper.API_BASE}/cart-list`,Helper.addHeader());
        let productLists=res.data['data']
        setProducts(productLists);
    }

    const removeCartBtn= async(id)=>{
        try{
            setRefresh(true)
            let res=await axios.get(`${Helper.API_BASE}/remove-cart/${id}`,Helper.addHeader());
            setRefresh(false)
            if(res.data['msg']==='success'){
                toast.success('Removed From Cart List')
            }else{
                toast.error('Failed to Remove')
            }

        }catch(e){
            Helper.unauthorized(e.response.status)
        }

    }
    return (
        <div>
            {products==null || refresh ? (<FullScreenLoader/>):(
                <div className="container">
                    <div className="row mt-3">
                    {products.map(item => <div className="col-md-4 mb-4" key={item.product.id}>
                            <div className="card p-3">
                                <img src={item.product.image} alt="" />
                                <h5>Price :{item.product.discount?(<span><strike className='me-2'>{item.product.price} </strike><span>{
                                    item.product.discount_price}</span></span>):(item.product.price)}</h5>
                                <h3>{item.product.title}</h3>
                                <button onClick={()=>{removeCartBtn(item.product['id'])}} className="btn btn-outline-danger mt-2">Remove Cart</button>
                            </div>
                    </div>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;