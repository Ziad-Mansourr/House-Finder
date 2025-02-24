import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as yp from 'yup';
import { useFormik } from 'formik';
import axiosInstance from '../../services/axiosInstance';
export default function ForgetPassword() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  let validationSchema = yp.object().shape({
    email: yp.string().email('email invalid').required('email is required'),
  });



  function handleLogin(values) {
    setLoad(true);
    axiosInstance.post(`users/forgotPassword` , values)
    .then(({data})=>{
      console.log(data);
      setLoad(false);
      navigate('/resetPass');
    })
    .catch((errors)=>{
      console.log(errors);
      setLoad(false);
       
    })
    console.log(values);
     
  }

  let formik = useFormik(
    {
      initialValues: {
        email: '',
      },
      onSubmit: (values) => handleLogin(values),
      validationSchema: validationSchema
    }
  )

  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto pt-28" >
          <h1 className='col-span-12 text-center text-3xl md:text-4xl lg:text-5xl text-white'>Forgot Your Password?</h1>
          <h2 className='col-span-12 text-center text-white text-xl mt-6'>Your password will be reset by email</h2>
          <div className="col-span-12 mb-5 mt-11" >
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your email
            </label>
            <input
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"

            />

            {formik.errors.email != null && formik.touched.email ?
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.email}</span>
              </div> : null}
          </div>
          <div className="col-span-12 flex justify-center items-center">
            <button className='p-0 w-[40%] bg-blue-700 text-white mb-5 py-2.5 hover:bg-blue-800 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={formik.handleSubmit}>
              
            {load ? <i className='fas fa-spinner fa-spin px-2' ></i> : 'Submit'}
             
            </button>

          </div>
        </div>
      </section>
    </>
  )
}
