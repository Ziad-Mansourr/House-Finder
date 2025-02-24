import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as yp from 'yup';
import { useFormik } from 'formik';
import axiosInstance from '../../services/axiosInstance';
export default function ResetPassword() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  function show(i) {
    if (!(i)) {
      showPass ? setShowPass(false) : setShowPass(true);
    } else {

      showPass1 ? setShowPass1(false) : setShowPass1(true);
    }
  }
  let validationSchema = yp.object().shape(
    {
      resetCode: yp.string().matches(/^[0-9]{6,8}$/, 'Code is invalid').min(5, 'min is 5').required('Code is required'),
      password: yp.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, 'Password should be start with capital letter and min length is 8 chars').required('password is required'),
      rePassword: yp.string().oneOf([yp.ref('password')], 'password is invalid').required('Password is required')
    }
  );



  function handleReset(values) {
    let body=
    {
      password:values.password,
      passwordConfirm:values.rePassword
    };
    console.log(body);
    console.log(values.resetCode);
    
    setLoad(true);
    axiosInstance.patch(`users/resetPassword/${values.resetCode}` , body)
    .then(({data})=>{
      console.log(data);
      setLoad(false);
      navigate('/login');
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
        resetCode:'',
        password: '',
        rePassword: '',
      },
      onSubmit: (values) => handleReset(values),
      validationSchema: validationSchema

    }
  )

  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <form className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto  pt-32" onSubmit={formik.handleSubmit}>
          <h1 className='col-span-12 text-center text-3xl md:text-4xl lg:text-6xl mb-10 text-white'>Forgot Password</h1>

          <div className="col-span-12 mb-5 mt-11">
            <label htmlFor="verify" className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Verification Code
            </label>
            <input
              value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} id="resetCode"
              type="text"
              name='resetCode'
              maxLength={8}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="EX: 455236"
            />

            {formik.errors.resetCode != null && formik.touched.resetCode ?
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.resetCode}</span>
              </div> : null}
          </div>

          <div className="mb-5 col-span-12 relative ">
            <label
              htmlFor="password"
              className="block mb-2  text-sm font-medium text-white dark:text-white"
            >
              New password
            </label>
            <input
              value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type={showPass ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
            <button type='button' onClick={() => show(0)} className="p-0 bg-transparent absolute top-9 right-3"> <i className={showPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i> </button>
            {formik.errors.password != null && formik.touched.password ?
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.password}</span>
              </div> : null}
          </div>
          <div className="mb-5 col-span-12 relative">
            <label
              htmlFor="ConfPassword"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Confirm password
            </label>
            <input
               value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type={showPass1 ? "text" : "password"}
              id="rePassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
            />
            <button type='button' onClick={() => show(1)} className="p-0 bg-transparent absolute top-9 right-3"> <i className={showPass1 ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i> </button>
            {formik.errors.rePassword != null && formik.touched.rePassword ?
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.rePassword}</span>
              </div> : null}
          </div>
          <div className="col-span-12 flex justify-center items-center">
            <button
              className="text-white bg-blue-700 mt-3  w-[40%] mb-5 py-2.5 hover:bg-blue-800 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               {load ? <i className='fas fa-spinner fa-spin px-2' ></i> : 'Reset'}
            </button>

          </div>
        </form>
      </section>
    </>
  )
}
