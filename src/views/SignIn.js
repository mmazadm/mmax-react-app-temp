import React, {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import d from "../assets/dictionary";
import { login } from "../store/userSlice";

const SignIn = () => {
    const initialValues = {userName:'',password:''}
    const [formValues,setFormValues] = useState(initialValues)
    const [formError,setFormError]=useState({});
    const { authenticated, isLoading, error } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('mmx_storage')


   const ChangeHandler =(e)=>{
       const {name,value} = e.target;
       setFormValues({...formValues,[name]:value})
    }
  
    const submitHandler =(e)=>{  
      e.preventDefault();
      let errors = validate(formValues)
      if(Object.keys(errors).length === 0){
        dispatch(login(formValues))
        setFormValues(initialValues);
        navigate('/account/summary', {replace:true})
      }
      else setFormError(errors)
    }

    const validate = (values) =>{
       let errors ={}
       if(!values.userName){
        errors.userName = 'Username is required'
       }
         if(!values.password){
        errors.password = 'Password is required!!'
       } else if (values.password.length < 6) {
        errors.password = 'Password should be atleast 6 characters long'
       }
       return errors;
    }

    useEffect(() => {
      if(token || authenticated)
        navigate('/account/summary', {replace:true})
    }, [token, navigate, authenticated])
    
  return (
    <section className="wpo-contact-pg-section section-padding ">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <div className="form-group">
                <label htmlFor="username">{d.signIn.userName}</label>
                <input
                  value={formValues.userName}
                  onChange={ChangeHandler}
                  type="text"
                  name="userName"
                  className="form-control mt-2"
                  placeholder="Enter username"
                />
              </div>
              <p className='text-danger'>{formError.userName}</p>
              <div className="form-group ">
                <label htmlFor="password">{d.signIn.password}</label>
                <input
                  value={formValues.password}
                  name='password'
                  onChange={ChangeHandler}
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                />
              </div>
              <p className='text-danger'>{formError.password}</p>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                   {d.signIn.rememberMe}
                  </label>
                </div>
              </div>
               <button className="theme-btn mt-2" 
               onClick={submitHandler}
               disabled={isLoading}>
                Submit
              </button>
              {error && <p className="text-danger">Username and password do not match</p>}
              <h6 className="mt-3">{d.signIn.forgotPassword}</h6>
            </div>
          </div>
          <div className="col-6">{d.signIn.register}</div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
