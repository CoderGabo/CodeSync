import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CodeSyncApp } from './CodeSyncApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CodeSyncApp />
    </BrowserRouter>
  </React.StrictMode>,
)
