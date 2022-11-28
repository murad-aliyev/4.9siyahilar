import React from 'react'
import ReactDOM from 'react-dom/client'
import SubscribeButton from './components/Button/button'
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='div1'><SubscribeButton/>
  <button>Alive</button><button>Not Alive</button>
  </div>
)
