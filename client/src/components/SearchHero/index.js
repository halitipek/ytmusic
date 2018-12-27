import React, { useState } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'

const apiKey = 'AIzaSyA8zU6-ltAIe54kZqeu4rjyfUSPai7qxfE'
const { Search } = Input

const SearchButtonGenerator = (loading) => (
  <Button type="primary" loading={loading}>
    {
      (loading && 'Searching...') ||
      (!loading && 'Search')
    }
  </Button>
)

const searchStyle = {
  maxWidth: 800
}

const VideoList = (items) => (
  items.map(item => (
    <iframe 
      style={{width: '100%', height: '100%'}}
      key={item.id.videoId}
      src={'https://www.youtube.com/embed/' + item.id.videoId}
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  ))
)

const SearchHero = (props) => {
  const { searchKeyword, setSearchKeyword, searchLoading, setSearchLoading, handleSearch, setVideos} = props
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Search
            style={searchStyle}
            placeholder="Search video"
            enterButton={SearchButtonGenerator(searchLoading)}
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
            size="large"
            onSearch={handleSearch(setVideos, setSearchLoading, searchKeyword)}
          />
        </div>
      </div>
    </section>
  )
}

export default SearchHero
