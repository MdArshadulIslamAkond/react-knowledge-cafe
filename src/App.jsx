
import { useState } from 'react'
import './App.css'
import Blogs from './compoinents/blogs/blogs'
import Bookmarks from './compoinents/bookmarks/bookmarks'
import Header from './compoinents/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    // console.log(blog)
    const chackBookmark = bookmarks.find(book => {
      return book.id === blog.id
    })
    if(!chackBookmark){
      setBookmarks([...bookmarks, blog])
    }
  }
  const handleMarkAsRead = blog=>{
    const {reading_time,id} = blog
    
    setReadingTime(readingTime + reading_time)
    const chackBookmark =  bookmarks.filter(book =>{
      return book.id !== id
    } )
    setBookmarks(chackBookmark)
    // console.log(readingTime)
  }
  
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <main className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks bookmarks ={bookmarks} readingTime={readingTime} />
      </main>
   </div>
  )
}

export default App
