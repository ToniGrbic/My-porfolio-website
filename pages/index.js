import { useState, useEffect } from 'react'
import { client} from '../lib/client'
import { MILISEC_IN_YEAR, YEARS_IN_100_MILISEC, DATE_OF_BIRTH } from '../lib/constants'

const getAge = ()=>{
    let currentTime = new Date().getTime()
    let birthTime = new Date(DATE_OF_BIRTH).getTime()
    return (currentTime - birthTime) / MILISEC_IN_YEAR;
}

export default function Home({About}){
  const [Age, setAge] = useState(0)
  const [showAbout, setShowAbout] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
     const currentAge = getAge()
     setAge(currentAge)
     
     const intervalId = setInterval(()=>{
       setAge(age=>age + YEARS_IN_100_MILISEC)
     },100)

     setIsLoading(false)

     return () => {
        clearInterval(intervalId);
      }
  },[])

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
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

