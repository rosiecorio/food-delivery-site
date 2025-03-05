import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import RestaurantsPage from './Pages/RestaurantsPage'
import CheckoutPage from './Pages/CheckoutPage'
import EachMenu from './Pages/EachMenu'

function App() {


  return (
    <>
      <BrowserRouter>
        <nav className='mainNav'>
          <Link to="/" className='homeButton navButton'></Link>
          <Link to="/browse" className='browseButton navButton'></Link>
          <Link to="/checkout" className='checkoutButton navButton'></Link>
        </nav>

        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/browse"} element={<RestaurantsPage />} />
          <Route path={"/browse/:id"} element={<EachMenu />} />
          <Route path={"/checkout"} element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
