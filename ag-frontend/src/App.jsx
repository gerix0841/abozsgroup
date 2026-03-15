import React from 'react'
import './index.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Köszönöm!</h1>
        <p>
          Örülök, hogy ellátogattál az oldalamra. Ez az első React alapú 
          projektem, ami már a saját domainem alatt fut.
        </p>
        <button className="btn" onClick={() => window.location.reload()}>
          Frissítés
        </button>
      </div>
    </div>
  )
}

export default App