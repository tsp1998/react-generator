import React from 'react'

const CSSCode = ({ cssCode, setCode }) => {
  const handleChange = e => {
    const newValue = e.target.value;
    setCode(prevCode => ({
      ...prevCode,
      cssCode: newValue
    }))
  }
  
  return (
    <div className="css-code-container">
      <h2>CSS</h2>
      <textarea rows="20" cols="35" onChange={handleChange} value={cssCode}></textarea>
    </div>
  )
}

export default CSSCode
