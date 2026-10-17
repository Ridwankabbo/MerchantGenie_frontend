import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LandingPageLayout from './layout/landing_page_layout'
import Home from './Home'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPageLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App