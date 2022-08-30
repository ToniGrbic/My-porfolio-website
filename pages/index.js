import { useState, useEffect } from 'react'
import {client, urlFor } from '../lib/client'

const MILISEC_IN_YEAR = 31556952000
const YEARS_IN_100_MILISEC = 1/315569520
const DATE_OF_BIRTH = '2001/8/31'

export default function Home({about}) {

  const [Age, setAge] = useState(0)
  const [showAbout, setShowAbout] = useState(false)

  const getAge = ()=>{
    let currentTime = new Date().getTime()
    let birthTime = new Date(DATE_OF_BIRTH).getTime()
    let ageInMilisecs = currentTime - birthTime
    let ageInYears = ageInMilisecs / MILISEC_IN_YEAR
    
    return ageInYears
  }

  useEffect(()=>{
     const currentAge = getAge()
     setAge(currentAge)

     const intervalId = setInterval(()=>{
       setAge(age=>age+ YEARS_IN_100_MILISEC)
     },100)

     return () => {
        clearInterval(intervalId);
      }
  },[])

  return (
    <>
      <h1>
        Hello my name is <span>{about[0].name}</span> 👋
      </h1>
      <div>
        <h2>{about[0].description}</h2>
      </div>
      <h2>{Age.toFixed(9)} years old</h2>
      <button onClick={()=> setShowAbout(prev => !prev)}
              className='aboutBtn'
      >
        Learn more
      </button>
       <div className={`about ${!showAbout ? 'fade':''}`}>
        <p>
         {about[0].paragraph} 😊
        </p>
      </div>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "about"]'
  const about = await client.fetch(query)
  return {
    props: { about }
  }
}