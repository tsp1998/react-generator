import React, { useRef, useEffect } from 'react'

const Output = ({ code }) => {

  const ref = useRef(null);

  useEffect(() => {
    ref.current.innerHTML = code.htmlCode;
    // const allCss = code.cssCode.split('{') || [];

    // if (allCss.length) {
    //   for (const css of allCss) {
        
    //   }
    // }
    const styles = document.querySelectorAll('style#style');
    for (const style of styles) {
      style.parentNode.removeChild(style);
    }
    const style = document.createElement('style');
    style.setAttribute('id', 'style')
    style.innerHTML = code.cssCode;
    document.body.appendChild(style);
    console.log('object')
  }, [code])

  return (
    <div ref={ref}>
    </div>
  )
}

export default Output
