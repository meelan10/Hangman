import React, { useState } from 'react'
import './wordList.json'

const App = () => { 
  const [wordToGuess, setwordtoGuess] = useState(() => {
    return words[Math.floor(Math.random() * wordToGuess.length)]
  })
  return (
    <div>
      
    </div>
  )
}

export default App
