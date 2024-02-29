import { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerator = () => {
    setQrCode(input);
    setInput('');
  }

  return (
    <>
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="inputContainer">
          <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
          <button disabled={!input} onClick={handleGenerator}>Generate QR</button>
        </div>
        <div>
          <QRCode id="qrcode" value={qrCode} size={400} bgColor="#ffffff" />
        </div>
      </div>
    </>
  )
}

export default App
