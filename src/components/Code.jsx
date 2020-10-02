import React from 'react'

//components
import HTMLCode from './HTMLCode'
import CSSCode from './CSSCode'

const Code = ({ code, setCode }) => {
  return (
    <div className="code-container">
      <HTMLCode htmlCode={code.htmlCode} setCode={setCode} />
      <CSSCode cssCode={code.cssCode} setCode={setCode} />
    </div>
  )
}

export default Code
