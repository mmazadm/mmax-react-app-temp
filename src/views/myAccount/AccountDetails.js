import React, { useState } from 'react'
import d from '../../assets/dictionary'
import { validateEmail, validatePhone } from '../../assets/utility';

const AccountDetails = () => {
    const initialValues = { firstName: '', lastName: '', homephone: '', mobilephone: '', hearabout: '', industry: '', email: '', category: '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({})

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setFormError(validateDetails(formValues));
        setFormValues(initialValues);

    }

    const validateDetails = (values) => {
        let errors = {}

        if (!values.firstname) {
            errors.firstname = 'First Name is required'
        }
        if (!values.lastname) {
            errors.lastname = 'Last Name is required'
        }
        if (!values.hearabout) {
            errors.hearabout = 'Select any option!!'
        }
        if (!values.industry) {
            errors.industry = 'Select any option!!'
        }
        if (!values.category) {
            errors.category = 'Select any option!!'
        }
        if(!validatePhone(formValues.mobilephone)){
            errors.mobilephone = 'Invalid number'
        }
        if(!validatePhone(formValues.homephone)){
            errors.homephone = 'Invalid number'
        }
        if(!validateEmail(formValues.email)){
            errors.email = "Please enter Valid Email!!"
        }

        return errors;
    }
    return (
        <>
            <div className="msgstrip">
                <p className="accstrip">{d.accountDetails.account} &gt; {d.accountDetails.details}</p>
            </div>

            <div className="wpo-contact-form-area mt-4">
                <div className="row">
                    <div
                        method="post"
                        className="contact-validation-active detailbtntop col"
                        id="contact-form-main"
                        noValidate="novalidate"
                    >
                        <div>
                            <p className="">
                                {d.accountDetails.firstName} <span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                value={formValues.firstname}
                                onChange={ChangeHandler}

                            />
                        </div>
                        <p className='text-danger'>{formError.firstname}</p>

                        <div>
                            <p className="">
                                {d.accountDetails.lastName} <span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                value={formValues.lastname}
                                onChange={ChangeHandler}
                            />
                        </div>
                        <p className='text-danger'>{formError.lastname}</p>

                        <div>
                            <p className="">
                                {d.accountDetails.homePhone} <span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                value={formValues.homephone}
                                onChange={ChangeHandler}
                                
                            />
                        </div>
                        <p className='text-danger'>{formError.homephone}</p>

                        <div>
                            <p className="">
                                {d.accountDetails.mobilePhone} <span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                value={formValues.mobilephone}
                                onChange={ChangeHandler}
                            />
                        </div>
                        <p className='text-danger'>{formError.mobilephone}</p>
                        

                        <div>
                            <p className="">
                                {d.accountDetails.howDidHearAboutUs}
                                <span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                
                            />
                        </div>
                        <p className='text-danger'>{formError.hearabout}</p>

                        <div>
                            <p className="">

                                {d.accountDetails.industry}<span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"

                            />
                        </div>
                        <p className='text-danger'>{formError.hearabout}</p>

                        <div>
                            <p className="">
                                {d.accountDetails.emailAddress}<span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"

                            />
                        </div>
                        <p className='text-danger'>{formError.email}</p>

                        <div>
                            <p className="">
                                {d.accountDetails.category}<span className="text-danger">*</span>
                            </p>

                            <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"

                            />
                        </div>
                        <p className='text-danger'>{formError.category}</p>

                        <div className="notein fullwidth ">
                            {d.accountDetails.note}
                        </div>
                        <div className="fullwidth ">
                            <button
                                type="submit"
                                className="theme-btn sellformbtn11 theme-btngrad"
                                onClick={submitHandler}
                            >
                                {d.accountDetails.save}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AccountDetails