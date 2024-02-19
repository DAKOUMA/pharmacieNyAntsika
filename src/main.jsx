import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTopOnMount/>
    <App/>
  </BrowserRouter>
)

export default ScrollToTopOnMount