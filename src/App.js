
import React from 'react'
import News from './Component/News'
import NavBar from './Component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const [find, setFind] = React.useState('')
  const toggleFind = (f) => {
    setFind(f)
    console.log(find)
  }

  return (<div>


    <NavBar  />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<News key={'general'} apikey={apikey} search='general' 
        country='in' />} />
        <Route exact path='/sports' element={<News key={'sports'} apikey={apikey} search='sports' country='in' />} />
        <Route exact path='/entertainment' element={<News key={'entertainment'} apikey={apikey}search='entertainment' country='in' />} />
        <Route exact path='/health' element={<News key={'health'} apikey={apikey} search='health' country='in' />} />
        <Route exact path='/technology' element={<News key={'technology'} apikey={apikey} search='technology' country='in' />} />
        <Route exact path='/science' element={<News key={'science'} apikey={apikey} search='science' country='in' />} />
        <Route exact path='/business' element={<News key={'business'} apikey={apikey} search='business' country='in' />} />
        <Route exact path='/search' element={<News key={'search'} apikey={apikey} search={find} country='in' />} />
      </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App