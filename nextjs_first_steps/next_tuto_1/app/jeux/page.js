"use client"
import React from 'react'
import { useState, useEffect } from "react"
import Link from 'next/link'

const jeux = () => {
    const [number, setNumber] = useState(0);
    const increment = () => {
        // alert("Vous avez cliqué sur le bouton Increment")
        setNumber(number + 1) 
    }
    const decrement = () => {
        setNumber(number - 1)
    }
    // useEffect(() => {
    //     alert("La page a été chargée")
    // }, [])
    // useEffect(() => {
    //   console.log("Le nombre a changé");
    // }, [number]);
    useEffect(() => {
        return () => {
          console.log("Le composant eest démonté")
      }
    }, [number]);
    return (
      <>
        <div>{number}</div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <Link href="/cv">CV</Link>
      </>
    );
}

export default jeux
