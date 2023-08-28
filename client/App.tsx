import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Membership from './components/Membership'
import Location from './components/Location'
import Contact from './components/Contact'


  function App(){
    
    return (
        <RouterProvider
        router={createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About/>}/>
                  <Route path="location" element={<Location/>}/>
                  <Route path="membership" element={<Membership/>}/>
                  <Route path="contact" element={<Contact/>}/>
                </Route>
            )
        )}
        />
    )
  }

  export default App