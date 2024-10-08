import React, { useState } from 'react'
import { UserAxios } from '../../components/axios-instance/instance';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate();
    const base_url = 'http://passgen.gearpross.shop'
    // const base_url ='http://127.0.0.1:8000'

    const submitHandle = () => {
        console.log(Email, Password);
        const formData = {'email':Email, 'password':Password}
        UserAxios.post(`${base_url}/login`,formData).then((res)=>{
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            navigate('/')
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Login
                    </h2>

                    <form className="mt-10">
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="e-mail address" autoComplete="email" onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="password" autoComplete="current-password" onChange={(e)=>setPassword(e.target.value)}
                            className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <button type="button"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none" onClick={()=>submitHandle()}>
                            Login
                        </button>

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link to={'/register'} className="flex-2 underline">
                                Create an Account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login