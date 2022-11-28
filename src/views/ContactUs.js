import axios from 'axios'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { validateEmail } from '../assets/utility'
import Spinner from '../components/common/Spinner'

const ContactUs = () => {
    const initialValues = { firstname: '', lastname: '',email:'', message: '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [verified,setVerified] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onChange = (value) => {
        console.log("captcha value", value)
        setVerified(true);
    }

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let validated = validateDetails(formValues)
        if(validated){
        setLoading(true)
            axios.post('/api/contact-us',{
                firstname:'',
                lastname:'',
                email:'',
                message:''
            })
            .then(res=> {
                setFormValues(initialValues);
                setLoading(false)
            })
            .catch(err=>{
                setLoading(false)
                setError(true)
                setErrorMessage(error.message)
            })
        }
        else
        { setFormError(validateDetails(formValues));
        }

    }

    const validateDetails = (values) => {
        let errors = {}
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if(!values.email){
         errors.email = 'Username is required!!'
        } else if (!regex.test(values.email)){
         errors.email = 'Enter Valid Username'
        }

        if (!values.firstname) {
            errors.firstname = 'First Name is required'
        }
        if (!values.lastname) {
            errors.lastname = 'Last Name is required'
        }
        if (!values.message) {
            errors.message = 'Message is required!!'
        }
        else if (values.message.length > 150) {
            errors.message = 'Maximum length is 150 only.'
        }
        return errors;
    }
    return (
        <section className="wpo-contact-pg-section section-padding ">

            <div className='container'>

                <div className='row'>
                    <div className="fullwidth">
                        <label className="form-control insize bg-secondary text-white mb-4" >Contact Us</label>
                    </div>
                    <div className='col-6'>
                        <p>All filled marked with "<span className='text-danger'>*</span>"are required</p>
                        <div>
                            <div className="form-group">
                                <label htmlFor="username" className='d-flex'>First Name<span className='text-danger'>*</span> </label>
                                <input
                                    value={formValues.firstname}
                                    onChange={ChangeHandler}
                                    type="text"
                                    name="firstname"
                                    className="form-control mt-2"
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <p className='text-danger'>{formError.firstname}</p>
                            <div className="form-group ">
                                <label htmlFor="lastname">Last Name <span className='text-danger'>*</span></label>
                                <input
                                    value={formValues.lastname}
                                    name='lastname'
                                    onChange={ChangeHandler}
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            <p className='text-danger'>{formError.lastname}</p>
                            <div className="form-group ">
                                <label htmlFor="email"> Email <span className='text-danger'>*</span></label>
                                <input
                                    value={formValues.password}
                                    name='email'
                                    onChange={ChangeHandler}
                                    type="email"
                                    className="form-control mt-2"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <p className='text-danger'>{formError.email}</p>

                            <div className="form-group ">
                                <label htmlFor="message">Message<span className='text-danger'>*</span></label>
                                <textarea type="textarea"
                                value={formValues.message}
                                onChange={ChangeHandler}
                                 className="form-control"
                                    name="message" id="state"
                                />
                            </div>
                            <p className='text-danger'>{formError.message}</p>

                            <ReCAPTCHA className='mt-2'
                                sitekey="6LeZ3C4jAAAAAFug5KfMU74Ltzw9cRSnOAAYiQJN"
                                onChange={onChange}
                            />
                            {error && <p>{errorMessage}</p>}
                            <button type="submit" className="theme-btn mt-2" disabled={!verified || loading} onClick={submitHandler} >
                                Send {loading && <Spinner/>}
                            </button>
                        </div>
                    </div>
                    <div className='col-6 mt-1'>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs