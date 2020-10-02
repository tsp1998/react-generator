import React, { useState } from 'react';

//components
import Code from './components/Code'
import Output from './components/Output'

//styles and assets
import logo from './logo.svg';
import './App.css';

const sampleData = {
  htmlCode: '<button>Hello</button>',
  cssCode: `button {
            color:red;
            }`
}

function App() {

  const [code, setCode] = useState({ htmlCode: '', cssCode: '' });

  React.useEffect(() => setCode(sampleData), []);

  return (
    <div className="App">
      <h1>HTML CSS Generator - Style your HTML Online</h1>
      <div className="container">
        <Code code={code} setCode={setCode} />
        <Output code={code} />
      </div>
    </div>
  );
}

export default App;
