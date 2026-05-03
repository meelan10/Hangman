import { useState } from 'react'
import wordList from './wordList.json'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import keyword from './components/keyword'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div style={{
      maxWidth: "800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center",
    }}>
      <div style={{
        fontSize:"2rem",
        textAlign:"center"
      }}>Lose or Win</div>

      <HangmanDrawing />
      <HangmanWord />
      <Keyword />
    </div>
  )
}

export default App
