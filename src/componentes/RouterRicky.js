import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RickyList from './RickyList'
import NotFound from './NotFound'
import Rickyindividual from './Rickyindividual'
function RouterRicky() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route exact path='*' element={<NotFound />}/>
    <Route  exact path="/index" element={<RickyList />} />
    <Route exact path='/individual/:id' element={<Rickyindividual/>} />
    
</Routes>
</BrowserRouter>      
    </div>
  )
}

export default RouterRicky

