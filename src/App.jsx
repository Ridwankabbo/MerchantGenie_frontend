import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPageLayout from './layout/landing_page_layout'
import Home from './Home'
import Login from './pages/Login'
import Signup from './pages/Singup'
import ScrollToTop from './components/ScrollToTop'
import DashboardLayout from './layout/DashboardLayout'
import Channels from './pages/Dashboard/channels'
import DashboardOverview from './pages/Dashboard/overview'


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
        <Route>
          <Route path='/dashboard' element={<DashboardLayout/>}/>
            <Route index element={<DashboardOverview/>}/>
            <Route path='/dashboard/channels' element={<Channels/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App