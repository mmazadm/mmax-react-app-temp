import React from 'react'

const Loader = () => {
  return (
    <div className="preloader">
        <div className="vertical-centered-box">
            <div className="content">
                <div className="loader-circle"></div>
                <div className="loader-line-mask">
                    <div className="loader-line"></div>
                </div>
                <img src="../assets/images/logo.png" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Loader