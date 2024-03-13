import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Trends from './Components/Trends'
import TweetEditor from './Components/Tweet-Editor'
import Tweets from './Components/Tweets'

function App() {
  return (
    <>
      <div className='sidebar'><Sidebar/></div>
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div className='trends'><Trends/></div>
    </>
  )
}

export default App