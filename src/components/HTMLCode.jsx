import React from 'react'

const HTMLCode = ({ htmlCode, setCode }) => {

  const handleChange = e => {
    const newValue = e.target.value;
    setCode(prevCode => ({
      ...prevCode,
      htmlCode: newValue
    }))
  }

  return (
    <div className="html-code-container">
      <h2>HTML</h2>
      <textarea rows="20" cols="35" onChange={handleChange} value={htmlCode}></textarea>
    </div>
  )
}

export default HTMLCode
