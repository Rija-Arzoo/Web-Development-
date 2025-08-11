import { useCallback, useEffect, useState, useRef } from 'react'
import passwordImage from './assets/pic.jpg'
import logoImage from './assets/logoimg.png'
import Footer from './assets/Components/Footer.jsx'
import PricingCard from './assets/Components/PricingCard.jsx'
import { pricingPlans } from "./PricingData.js";
import './App.css'


function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const passwordRef = useRef(null)
  const fullText = "Generate a Strong Password with your own Settings"

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) {
      string += "0123456789"
    }

    if (charAllowed) {
      string += "!@#$%^&*()-_=+[]{}<>/?`|"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      // Reset after 3 seconds
      const resetTimer = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      {/* Header - Centered and Responsive */}
      <div className='flex sm:flex-row justify-center items-center px-4 gap-x-10 lg,sm:gap-x-20 sm:px-6 lg:px-8 py-4 gap-4'>
        <img src={logoImage} alt="logo" className='w-32 sm:w-36 lg:w-40 h-auto' />
        <h1 className="text-lg sm:text-3xl lg:text-3xl font-bold text-center text-pink-800 drop-shadow-lg whitespace-nowrap">
          Password Generator
        </h1>
      </div>

      {/* Main layout grid - Responsive but centered */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-8 lg:px-24 m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8">

        {/* Image and caption */}
        <div className="flex flex-col bg-blue-700 w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src={passwordImage}
            alt="password generator"
            className="w-full h-[90%] object-cover"
          />
          <p className="text-sm sm:text-md italic bg-pink-200 text-center py-1 px-2">
            Stay Safe with Secure Password
          </p>
        </div>

        {/* Heading and paragraph */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-600">
            Generate strong, secure, and unique passwords instantly
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Protect your accounts with randomly created passwords that are hard to guess but easy to use.
            Customize the length and include numbers, symbols, and uppercase letters for extra security.
          </p>
        </div>
      </div>


      {/* Typing effect text - JavaScript-based for perfect mobile support */}
      <div className='flex justify-center items-center px-4'>
        <p
          className="text-lg sm:text-xl lg:text-2xl font-bold p-2 m-2 sm:m-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500
        bg-clip-text text-transparent text-center
        whitespace-normal max-w-[90vw] relative"
        >
          {displayText}
          <span className="inline-block w-1 h-6 bg-blue-600 ml-1 animate-pulse"></span>
        </p>
      </div>

      {/* Password Generator Form - Centered and Responsive */}
      <div className='w-full mx-auto max-w-sm sm:max-w-md sm:mx-auto lg:max-w-lg lg:mx-auto shadow-lg rounded-lg m-4 sm:m-6 lg:m-8 bg-white'>
        <p className='text-center text-xs sm:text-sm font-bold text-pink-600 italic pt-4'>Get a Secure Password</p>
        <div className='flex shadow-md rounded-lg overflow-hidden m-3 sm:m-4 bg-gray-200'>
          <input
            type="text"
            value={password}
            className='outline-none w-full p-2 text-sm sm:text-base'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-900 text-white px-2 sm:px-3 py-2 shrink-0 hover:opacity-60 hover:outline-2 hover:outline-pink-300 text-sm sm:text-base'>Copy</button>
        </div>
        
        {/* Controls - Responsive Layout but centered */}
        <div className='flex flex-col sm:flex-row text-xs sm:text-sm gap-3 sm:gap-x-4 pb-3 sm:pb-2 px-3 sm:px-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer flex-1'
              onChange={(e) => {
                setLength(e.target.value)
              }} />
            <label htmlFor="rangeInput" className="whitespace-nowrap">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="min-h-screen flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl font-bold text-purple-900 mb-13 text-center">
          Pisco Pricing Plans
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default App
