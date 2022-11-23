import axios from "axios";
import React, {  useState } from "react";
import d from "../assets/dictionary";


const SignIn = () => {
    const initialValues = {userName:'',password:''}
    const [formValues,setFormValues] = useState(initialValues)
    const [formError,setFormError]=useState({});
    // const [isAvailable,setIsAvailable] = useState(false);
   const ChangeHandler =(e)=>{
       const {name,value} = e.target;
       setFormValues({...formValues,[name]:value})
      //  console.log(formValues)
    }
  
    const submitHandler =(e)=>{  
    e.preventDefault();
    // setIsAvailable(true);
    
    axios.get('https://mmax-api-wrapper.azurewebsites.net/api/settings',{
    username:"admin",
    password:"admin1234"
    })
    .then((res)=>{
      console.log(res.data);
     localStorage.setItem('mmax_token',res.data);
     
     
     console.log(res.data);
     console.log('hello');
      setFormValues(res.data);
    })
    .catch(err=> {
      setFormError(err.message)
    });


     setFormError(validate(formValues));
     setFormValues(initialValues);
    }

    

    const validate = (values) =>{
       let errors ={}
      
       const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
       if(!values.userName){
        errors.userName = 'Username is required!!'
       } else if (!regex.test(values.userName)){
        errors.userName = 'Enter Valid Username'
       }
         if(!values.password){
        errors.password = 'Password is required!!'
       } else if (values.password < 4) {
        errors.password = 'Password Length must be more than 4'
       }
        
       return errors;
    }
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
              {/* <div>
                {!isAvailable && <p className="text-danger">{d.signIn.enterValidCredential}</p>}
                </div> */}
              
               <button type="submit" className="theme-btn mt-2" onClick={submitHandler}>
                Submit
              </button>
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
