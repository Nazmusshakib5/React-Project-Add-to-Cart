import toast from "react-hot-toast";
import Helper from "../utility/helper";
import { useState } from "react";
import ButtonSpinner from "./ButtonSpinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [submit,setSubmit]=useState(false);
    const [delay,setDelay]=useState(false);
    const navigate=useNavigate();


    const logInFormSubmit=async(e)=>{
        e.preventDefault();
        let formData=new FormData(e.target);
        let email=formData.get('email')
        if(Helper.isEmpty(email)){
            toast.error('Email Required')
        }else{
            setSubmit(true)
            let res=await axios.post(`${Helper.API_BASE}/user-login`,{UserEmail:email})
            setSubmit(false);
            if(res.data['msg']=='success'){
                sessionStorage.setItem('email',email);
                toast.success(res.data['data']);
                navigate('/verify');
            }
            else{
                toast.error('Login Failed')
            }
        }
        
    }
    return (
        <div className="container ">
            <div className="row justify-content-center loginHeight align-items-center">
                <div className="col-md-6 ">
                    <div className="card p-4 my-5">
                        <form onSubmit={logInFormSubmit}>
                        <label htmlFor='loginForm' className="fs-4 my-2">Your Email Address :</label>
                        <input name="email" type="email" className="form-control my-3" id="loginForm" />
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

export default LoginForm;