import React from 'react'
import d from '../../assets/dictionary'

const AccountPassword = () => {
    return (
    <>
            <div className="msgstrip ">
                <p className="accstrip">{d.accountPassword.account} &gt; {d.accountPassword.password}</p>
            </div>
            <div className="wpo-contact-form-area">
                <div className="row">
                    <div className="col-md-12 formsp">
                        <div
                            
                            className="contact-validation-active"
                            id="contact-form-main"
                            noValidate="novalidate"
                        >
                            <div className="fullwidth">
                                <span className="formtitle">
                                    {d.accountPassword.currentPassword} <span className="orangestar">*</span>
                                </span>
                               
                                <input
                                    type="text"
                                    className="form-control insize insizewidth"
                                    name="name"
                                    id="name"
                                  
                                />
                                <p className="notein">
                                    {d.accountPassword.note}
                                </p>
                            </div>
                            <div className="fullwidth">
                                <span className="formtitle">
                                    {d.accountPassword.newPassword} <span className="orangestar">*</span>
                                </span>
                                
                                <input
                                    type="text"
                                    className="form-control insize insizewidth"
                                    name="name"
                                    id="name"
                                    
                                />
                            </div>
                            <div className="fullwidth">
                                <span className="formtitle">
                                    {d.accountPassword.confirmPassword} <span className="orangestar">*</span>
                                </span>
                            
                                <input
                                    type="text"
                                    className="form-control insize insizewidth"
                                    name="name"
                                    id="name"
                                  
                                />
                            </div>
                            <div className="fullwidth">
                                <button
                                    type="submit"
                                    className="theme-btn sellformbtn11 theme-btngrad"
                                >
                                    {d.accountPassword.changePassword}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
            </>
            )
}

            export default AccountPassword