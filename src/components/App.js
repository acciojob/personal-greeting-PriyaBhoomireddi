import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState()
  console.log(text)
  return (
    <div>
      

      <label htmlFor='ip'>Enter your name:</label><br/>
      <input id='ip' type='text' onChange={(e) => {
        setText(e.target.value)
      }} />

      {/* {text && <p>Hello {text}!</p>} */}

      <p>{text && `Hello ${text}!`}</p>

    </div>
  )
}

export default App