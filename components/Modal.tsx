import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

function Modal() {
  const [isBrowser, setIsBrowser] = useState(false)
  const element = document.getElementById('modal-root')

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser && element !== null) {
    return ReactDOM.createPortal(<div>Hello from modal</div>, element)
  } else {
    return null
  }
}

export default Modal
