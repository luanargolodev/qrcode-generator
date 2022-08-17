import { useState } from 'react';
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(url) {
    QRCodeLink.toDataURL(url, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e) {
    setUrl(e.target.value)

    handleGenerate(e.target.value)
  }
      
  return (
    <div className='container'>
      <QRCode
        value={url}
      />

      <input
        className='input'
        placeholder='Qual o seu link?'
        value={url}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>
    </div>
  )
}

export default App