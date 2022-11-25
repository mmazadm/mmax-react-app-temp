import React,{useState, useEffect} from 'react'

const CountUp = ({end}) => {
    const [count, setCount] = useState(0)
    const [isInViewport, setIsInViewport] = useState(false)

    let incr = 10
    let time = 100
    if(end<100) {
        incr = 1
        time = 300
    }
    else if(end<1000) incr = 10
    else if(end<10000) incr = 100
    else incr = 1000

    useEffect(()=>{
      const startCounter = () => {
        var myElement = document.getElementById('counter');
        if(myElement){
          var bounding = myElement.getBoundingClientRect();
          if (bounding.top >= 0 && bounding.left >= 0 
            && bounding.right <= window.innerWidth 
            && bounding.bottom <= window.innerHeight)
            //start counter if component is in viewport
            setIsInViewport(true)
           else
            setIsInViewport(false)
          }
      }
      window.addEventListener('scroll',startCounter)
      return()=> window.removeEventListener("scroll", startCounter)
      },[])

      useEffect(()=>{
        if(isInViewport){
          let start = 0
          const timer = setInterval(()=>{
            start+=incr
            if(start < end){
              setCount(start)
            } else {
              setCount(end)
              clearInterval(timer)
            }
          }, time)
        }
      },[end, incr, time, isInViewport])

    return (
        <span id="counter">{count}</span>
  )
}

export default CountUp