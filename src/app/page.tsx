"use client"
import { useEffect, useState } from 'react'



export default function Page() {
  const [menu, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const scrollHeader = () => {
    if(window.scrollY >= 50){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <>
  




      
    </>
  )
}