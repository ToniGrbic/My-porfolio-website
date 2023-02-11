import { useState, useEffect } from 'react'
import {client} from '../lib/client'

const MILISEC_IN_YEAR = 31556952000
const YEARS_IN_100_MILISEC = 1/315569520
const DATE_OF_BIRTH = '2001/8/31'

const getAge = ()=>{
    let currentTime = new Date().getTime()
    let birthTime = new Date(DATE_OF_BIRTH).getTime()
    let ageInMilisecs = currentTime - birthTime
    let ageInYears = ageInMilisecs / MILISEC_IN_YEAR
    
    return ageInYears
}

export default function Home({About}){
  const [Age, setAge] = useState(0)
  const [showAbout, setShowAbout] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
     const currentAge = getAge()
     setAge(currentAge)
     setIsLoading(false)
    
     const intervalId = setInterval(()=>{
       setAge(age=>age + YEARS_IN_100_MILISEC)
     },100)

     return () => {
        clearInterval(intervalId);
      }
  },[])

  if(isLoading){
    return <><h1>Loading...</h1></>
  }
  return (
    <>
    <div className='descriptionDiv'>
      <h1>
        Hello my name is <span>{About.name}</span> 
      </h1>
      <h2>{About.description}</h2>
      <h2>{Age.toFixed(8)} years old</h2>
    </div>
      <button onClick={()=> setShowAbout(prev => !prev)}
              className='aboutBtn'
      >
        Learn more
      </button>
       <div className={`about ${!showAbout ? 'fade':''}`}>
        <p>
         {About.paragraph} 😊
        </p>
      </div>
    </>
  )
}

export const getServerSideProps = async({res})=>{
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const query = '*[_type == "about"]'
  const about = await client.fetch(query)
  const About = about[0]
  return {
    props: { About }
  }
}

