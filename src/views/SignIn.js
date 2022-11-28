import React, {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import d from "../assets/dictionary";
import { clearError, login } from "../store/userSlice";

const SignIn = () => {
    const initialValues = {username:'',password:''}
    const [formValues,setFormValues] = useState(initialValues)
    const [formError,setFormError]=useState({});
    const { authenticated, isLoading, error, errorMessage } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('mmx_storage')


   const ChangeHandler =(e)=>{
       const {name,value} = e.target;
       setFormValues({...formValues,[name]:value})
       setFormError({...formError,[name]:''})
    }
  
    const handleSubmit =(e)=>{  
      //e.preventDefault();
      let errors = validate(formValues)
      if(Object.values(errors).length === 0){
        dispatch(login(formValues, navigate))
        setFormValues(initialValues);
      }
      else setFormError(errors)
    }

    const validate = (values) =>{
       let errors ={}
       if(!values.username){
        errors.username = 'Username is required'
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
      dispatch(clearError())
    }, [token, navigate, authenticated, dispatch])
    
  return (
    <section className="wpo-contact-pg-section section-padding ">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <div className="form-group">
                <label htmlFor="username">{d.signIn.userName}</label>
                <input
                  value={formValues.username}
                  onChange={ChangeHandler}
                  type="text"
                  name="username"
                  className="form-control mt-2"
                  placeholder="Enter username"
                />
              </div>
              <p className='text-danger'>{formError.username}</p>
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
               disabled={isLoading}
               onClick={handleSubmit}>
                Submit
              </button>
              {error && <p className="text-danger">{errorMessage}</p>}
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
