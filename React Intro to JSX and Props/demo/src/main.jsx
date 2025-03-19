import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const Header = require('./components/Header.jsx')
// export default Header
import Header from './components/Header.jsx'

// export const Header.....
// import {Header, Footer} from './components/Header.jsx'

// react is basically JS that can run HTML = O
// const myName = 'Alvin'
// const lastName = 'Ng'

// const sayMyName = (myName) => {
//   return 'Hello ' + myName
// }
createRoot(document.getElementById('root')).render(
  <App />
)


// Component are repeatable parts of a website. Also components will always be some form of HTML