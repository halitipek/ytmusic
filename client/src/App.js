import React, { useState, useEffect } from 'react'
import SearchHero from './components/SearchHero'

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [videos, setVideos] = useState([])

  return (
    <div className="App">
      <SearchHero 
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchLoading={searchLoading}
        setSearchLoading={setSearchLoading}
        videos={videos}
        setVideos={setVideos}
      />
    </div>
  )
}

export default App
