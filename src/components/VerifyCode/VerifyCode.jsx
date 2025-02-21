import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as yp from 'yup';
import { useFormik } from 'formik';
export default function VerifyCode() {
  let navigate =  useNavigate();
  let validationSchema = yp.object().shape({
    resetCode: yp.string().matches(/^[0-9]{6,8}$/, 'Code is invalid').min(5, 'min is 5').required('Code is required'),

  })

  async function handleVerify(values) {
    console.log(values);
  }


  let formik = useFormik(
    {
      initialValues: {
        resetCode: '',
      },
      onSubmit:()=> handleVerify(formik.values),
      validationSchema: validationSchema
    }
  )

  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <form className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto pt-20" onSubmit={formik.handleSubmit} >
          {/* <i className="fa-solid fa-envelope "></i> */}
          <div className="col-span-12 flex justify-center">
            <img className=' ' src="src/assets/c7964f8a7cbdd972045348be39ab269e.png" alt="" />
          </div>
          <h1 className='col-span-12 mt-3 text-2xl md:text-4xl lg:text-4xl text-white'>Get Code From Your Email</h1>
          <h2 className='col-span-12  text-white text-xl mt-6'>Your password will be reset by email Enter the code form Your Email e****@gmail.com</h2>
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
          <div className="col-span-12 flex justify-center items-center">

            <button className='p-0 w-[40%] text-white bg-blue-700  mb-5 py-2.5 hover:bg-blue-800 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>navigate('/resetPass')}>
              
                Verify
            </button>

          </div>
        </form>
      </section>
    </>
  )
}
