import { useState } from 'react'
import wordList from './wordList.json'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyword from './components/keyword'

const App = () => {
  const allWords = [...wordList.easy, ...wordList.medium, ...wordList.hard]
  
  const [wordToGuess, setWordToGuess] = useState(() => {
    return allWords[Math.floor(Math.random() * allWords.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every(letter => guessedLetters.includes(letter))

  const handleAddGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(letters => [...letters, letter])
  }

  const handleReset = () => {
    setWordToGuess(allWords[Math.floor(Math.random() * allWords.length)])
    setGuessedLetters([])
  }

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display:"flex",
      flexDirection:"column",
      gap:"1rem",
      alignItems:"center",
      justifyContent:"center",
      padding:"20px",
      boxSizing:"border-box",
      backgroundColor:"#ffffff"
    }}>
      <div style={{
        fontSize:"1.5rem",
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"0.5rem"
      }}>
        {isWinner && "You Win! 🎉"}
        {isLoser && "You Lose! 😢"}
        {!isWinner && !isLoser && "Hangman Game"}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyword disabled={isLoser || isWinner} onGuess={handleAddGuess} guessedLetters={guessedLetters} />
      <button 
        onClick={handleReset}
        style={{
          padding: "8px 16px",
          fontSize: "0.9rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop:"0.5rem"
        }}
      >
        New Game
      </button>
    </div>
  )
}

export default App
