interface KeywordProps {
  disabled?: boolean
  onGuess: (letter: string) => void
  guessedLetters: string[]
}

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("")

const Keyword = ({ disabled = false, onGuess, guessedLetters }: KeywordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.4rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {LETTERS.map(letter => (
        <button
          onClick={() => onGuess(letter)}
          disabled={disabled || guessedLetters.includes(letter)}
          key={letter}
          style={{
            aspectRatio: "1",
            width: "30px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "0.25rem",
            cursor: disabled || guessedLetters.includes(letter) ? "not-allowed" : "pointer",
            backgroundColor:
              guessedLetters.includes(letter)
                ? "hsl(0, 100%, 50%)"
                : "hsl(200, 100%, 50%)",
            color: "white",
            border: "1px solid black",
            padding: "0",
          }}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default Keyword
