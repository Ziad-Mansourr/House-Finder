import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  
  let navigate = useNavigate();
   function LoginDash() {
    (formik.values.email === "admin@admin.com" && formik.values.password === "Ho#32sE@1") ? navigate('/dashBoard') : alert("Invalid Email or Password")  
   }
let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: ()=> LoginDash() 
    
})
  return (
    <>
      <div className="py-12 flex flex-col justify-center items-center">
        <img src="Collage/Logo.png" alt="House Finder Logo" className='w-[9%]'/>
        <div className="w-[30%]  py-7 mt-8 border-2 rounded-md shadow-md">
          <div className="text-center mb-5">
            <h2 className='mb-3 text-3xl'>Login</h2>
            <h3 className='text-xl'>Access to our dashboard</h3>
          </div>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
              <input type="email" value = {formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" value = {formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div type="submit" className="flex justify-center w-full" >
              <button type="submit" className="text-white bg-blue-700 w-full  hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
