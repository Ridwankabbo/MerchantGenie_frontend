import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPageLayout from './layout/landing_page_layout'
import Home from './Home'
import Login from './pages/Login'
import Signup from './pages/Singup'
import ScrollToTop from './components/ScrollToTop'

function App(){
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<LandingPageLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App