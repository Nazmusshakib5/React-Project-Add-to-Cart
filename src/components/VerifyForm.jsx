import {toast} from "react-hot-toast";
import Helper from "../utility/helper";
import { useState } from "react";
import ButtonSpinner from "./ButtonSpinner";
import axios from "axios";

const VerifyForm = () => {

    const [submit,setSubmit]=useState(false);
    const email=sessionStorage.getItem('email');

    const verifyFormSubmit=async(e)=>{
        e.preventDefault();
        let formData=new FormData(e.target);
        let OTP=formData.get('OTP')
        if(Helper.isEmpty(OTP)){
            toast.error('OTP Required')
        }else{
            setSubmit(true)
            let res=await axios.post(`${Helper.API_BASE}/verify-login`,{UserEmail:email,OTP:OTP})
            setSubmit(false);
            if(res.data['msg']=='success'){
                sessionStorage.removeItem('email');
                sessionStorage.setItem('token',res.data['data']);
                window.location.href='/'
            }
            else{
                toast.error('Verify Failed')
            }
        }
        
    }

    return (
        <div className="container ">
            <div className="row justify-content-center loginHeight align-items-center">
                <div className="col-md-6 ">
                    <div className="card p-4 my-5">
                        <form onSubmit={verifyFormSubmit}>
                        <label htmlFor='verifyForm' className="fs-4 my-2">OTP :</label>
                        <input name="OTP" type="text" className="form-control my-3" id="verifyForm" />
                        <button disabled={submit} type="submit" className="btn btn-danger p-2 w-100 mt-2">
                            {submit?(<ButtonSpinner/>):('Submit')}
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyForm;