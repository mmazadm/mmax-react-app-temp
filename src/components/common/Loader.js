import React from 'react'

const Loader = () => {

  React.useEffect(()=> {
    const preloader = document.getElementById('preloader')
    preloader.addEventListener('transitionend', () => preloader.remove())
    if(preloader){
      setTimeout(()=>{
        preloader.style.opacity = 0
      },100) 
    }
  },[])

  return (
    <div id="preloader" className="preloader">
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