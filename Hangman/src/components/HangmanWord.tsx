interface HangmanWordProps {
  reveal?: boolean
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({ reveal = false, wordToGuess, guessedLetters }: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.15em",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        letterSpacing: "0.3em",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{
          borderBottom: "0.1em solid black",
          minWidth: "0.5em",
          textAlign: "center",
          color: reveal && !guessedLetters.includes(letter) ? "hsl(0, 100%, 30%)" : "black"
        }}>
          <span style={{
            visibility:
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
