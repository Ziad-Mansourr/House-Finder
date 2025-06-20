import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yp from 'yup';
import { useFormik } from 'formik';
import { Button, Modal } from "flowbite-react";
import axiosInstance from "../../services/axiosInstance";
import toast from "react-hot-toast";
export default function SignUp() {
  const navigate = useNavigate();
  const [apiError, setApi] = useState('');
  const [ModalError, setModal] = useState('');
  const [load, setLoad] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let validationSchema = yp.object().shape(
    {
      fullName: yp.string().min(3, 'name minlengh is 3').max(50, 'name maxlengh is 50').required('name is required'),
      email: yp.string().email('email invalid').required('email is required'),
      phone: yp.string().matches(/^01[0125][0-9]{8}$/, 'phone is invalid').required('phone is required'),
      password: yp.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, 'Password should be start with capital letter and min length is 8 chars').required('password is required'),
      passwordConfirm: yp.string().oneOf([yp.ref('password')], 'password is invalid').required('Password is required'),
    }
  );



  function handleVerify(values) {
    setLoad(true);
    axiosInstance.post(`users/verifyMe`, values)
      .then(({ data }) => {
        console.log(data);
        setOpenModal(false);
        setLoad(false);
        toast.success('Account created successfully');
        setModal('');
        navigate('/login');
      }).catch((error) => {
        console.log(error);
        if (error.response.data.message.includes('Token is invalid')) {
          setModal('Code is invalid or expired');
        } else {
          setModal('Something went wrong, please try again later');
        }
        setLoad(false);

      })
    console.log(values);

  }

  let formikVer = useFormik(
    {

      initialValues: {
        token: '',
      },
      onSubmit: (values) => handleVerify(values),

    }
  );

  function handleRegister(values) {
    setLoad(true);
    axiosInstance.post(`users/signup`, values)
      .then(({ data }) => {
        console.log(data);
        setLoad(false);
        setOpenModal(true);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
        if(error.response.data.message.includes('email_1 dup key')) 
        setApi('Email is already registered');
      else if(error.response.data.message.includes('phone_1 dup key'))
        setApi('Phone is already found');
      else if(error.response.data.message.includes('getaddrinfo ENOTFOUND'))
        setApi('Check Network Connection');

      })

  }

  let formik = useFormik(
    {

      initialValues: {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
      },
      onSubmit: (values) => handleRegister(values),
      validationSchema: validationSchema

    }
  )


  function show(i) {
    if (!i) {
      showPass ? setShowPass(false) : setShowPass(true);
    } else {
      showPass1 ? setShowPass1(false) : setShowPass1(true);
    }
  }
  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <div className="w-[90%] mx-auto px-[15px] items-center py-[30px] grid grid-cols-12">

          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <h3 className="mb-5 text-lg  text-gray-900 dark:text-gray-400 font-semibold">
                  Check your email to confirm your account
                </h3>
                <div className=" flex justify-center mb-5 items-center text-gray-700 text-lg">
                  <input id="token" value={formikVer.values.token} onChange={formikVer.handleChange} onBlur={formikVer.handleBlur} type="text" placeholder="enter your code" className="rounded-md" />
                </div>
                {ModalError != '' ?
                  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{ModalError}</span>
                  </div>
                  : null
                }
                <div className="flex justify-center gap-4">
                  <Button color="blue" onClick={formikVer.handleSubmit}>
                    {load ? <i className='fas fa-spinner fa-spin px-2' ></i> : 'Verify'}
                  </Button>

                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="col-span-12 mb-5 lg:mb-0  text-center lg:text-start lg:col-span-7">
            <p className="text-[17px] md:text-3xl text-white font-normal mt-8 md:mt-14 mb-7">
              A leading real estate developer in Egypt
            </p>
            <h2 className="text-[19px] md:text-[30px] lg:text-[48px] text-white  font-semibold  leading-tight">
              BE PART OF OUR COMMUNITIES
            </h2>
            <button className="bg-[#054e98] rounded-2xl px-4 mt-5 lg:mt-10 text-white text-xl tracking-wider">
              LEARN MORE
            </button>
          </div>
          <div className="col-span-12  lg:col-span-5">
            <div className=" bg-[#d9d9d9] shadow-md shadow-gray-500 w-full  lg:w-[80%] px-8 lg:ml-10 py-9 rounded-xl ">
              <h2 className="uppercase text-center text-4xl mb-5 tracking-wider font-semibold text-[#0c283c]">
                Sign Up
              </h2>
              <form className="max-w-sm md:max-w-lg  lg:max-w-sm mx-auto " onSubmit={formik.handleSubmit}>
                {apiError != '' ?
                  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{apiError}</span>
                  </div>
                  : null
                }
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    type="text"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex: Fatma Ahmed"
                  />

                  {formik.errors.fullName != null && formik.touched.fullName ?
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                      <span className="font-medium">{formik.errors.fullName}</span>
                    </div> : null}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone
                  </label>
                  <input
                    value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone Number"
                  />
                  {formik.errors.phone != null && formik.touched.phone ?
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span className="font-medium">{formik.errors.phone}</span>
                    </div> : null}

                </div>
                <div className="mb-5 relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>


                  <input
                    value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    type={showPass ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                  />

                  <button
                    type="button"
                    onClick={() => show(0)}
                    className="p-0 bg-transparent absolute top-9 right-3"
                  >
                    {" "}
                    <i
                      className={
                        showPass
                          ? "fa-regular fa-eye"
                          : "fa-regular fa-eye-slash"
                      }
                    ></i>{" "}
                  </button>

                  {formik.errors.password != null && formik.touched.password ?
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span className="font-medium">{formik.errors.password}</span>
                    </div> : null}
                </div>
                <div className="mb-5 relative">
                  <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    value={formik.values.passwordConfirm} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    type={showPass1 ? "text" : "password"}
                    id="passwordConfirm"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={() => show(1)}
                    className="p-0 bg-transparent absolute top-9 right-3"
                  >
                    {" "}
                    <i
                      className={
                        showPass1
                          ? "fa-regular fa-eye"
                          : "fa-regular fa-eye-slash"
                      }
                    ></i>{" "}
                  </button>
                  {formik.errors.passwordConfirm != null && formik.touched.passwordConfirm ?
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span className="font-medium">{formik.errors.passwordConfirm}</span>
                    </div> : null}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button type="submit" className="text-white  bg-blue-700  w-[60%] mb-4 py-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {load ? <i className='fas fa-spinner fa-spin px-2' ></i> : 'Sign Up'}
                  </button>
                  <div className="flex ">
                    <span className="mr-2">Don&apos;t have an account?</span>
                    <Link to={"/login"} className="underline text-[#054E98]">
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
