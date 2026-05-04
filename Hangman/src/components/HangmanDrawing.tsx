interface HangmanDrawingProps {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  const HEAD = (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "3px solid black",
        position: "absolute",
        top: "30px",
        right: "-20px",
      }}
    />
  )
  
  const BODY = (
    <div
      style={{
        width: "3px",
        height: "60px",
        background: "black",
        position: "absolute",
        top: "70px",
        right: "-18px",
      }}
    />
  )
  
  const RIGHT_ARM = (
    <div
      style={{
        width: "60px",
        height: "3px",
        background: "black",
        position: "absolute",
        top: "90px",
        right: "-70px",
        rotate: "-30deg",
        transformOrigin: "left center",
      }}
    />
  )
  
  const LEFT_ARM = (
    <div
      style={{
        width: "60px",
        height: "3px",
        background: "black",
        position: "absolute",
        top: "90px",
        right: "0px",
        rotate: "30deg",
        transformOrigin: "right center",
      }}
    />
  )
  
  const RIGHT_LEG = (
    <div
      style={{
        width: "60px",
        height: "3px",
        background: "black",
        position: "absolute",
        top: "125px",
        right: "-70px",
        rotate: "60deg",
        transformOrigin: "left center",
      }}
    />
  )
  
  const LEFT_LEG = (
    <div
      style={{
        width: "60px",
        height: "3px",
        background: "black",
        position: "absolute",
        top: "125px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right center",
      }}
    />
  )

  const PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* Gallows */}
      <div
        style={{
          height: "150px",
          width: "3px",
          background: "black",
          marginLeft: "70px",
          marginBottom: "5px",
        }}
      />
      <div
        style={{
          height: "3px",
          width: "120px",
          background: "black",
          marginLeft: "70px",
          marginBottom: "5px",
        }}
      />
      <div
        style={{
          height: "3px",
          width: "30px",
          background: "black",
          marginLeft: "160px",
          position: "absolute",
          top: "0px",
        }}
      />

      {/* Base */}
      <div
        style={{
          height: "3px",
          width: "120px",
          background: "black",
          marginLeft: "30px",
        }}
      />

      {/* Hangman body parts */}
      <div style={{ position: "relative", height: "150px", width: "200px" }}>
        {PARTS.slice(0, numberOfGuesses)}
      </div>
    </div>
  )
}

export default HangmanDrawing
