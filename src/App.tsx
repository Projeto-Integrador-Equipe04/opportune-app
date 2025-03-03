import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ "" } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
