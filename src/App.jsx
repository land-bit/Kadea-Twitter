import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import TweetEditor from './Components/Tweet-Editor'
import Tweets from './Components/Tweets'

function App() {
  return (
    <>
      <div><Sidebar/></div>
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div></div>
    </>
  )
}

export default App