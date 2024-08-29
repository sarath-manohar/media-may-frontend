
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'

function App() {


  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />
      </Routes>


      <Footer/>
    </>
  )
}

export default App
