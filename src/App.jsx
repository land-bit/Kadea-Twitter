import './App.css'
import Header from './Components/Header'
import TweetEditor from './Components/Tweet-Editor'
import Tweets from './Components/Tweets'

function App() {
  const d = 'firm'
  return (
    <div className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  )
}

export default App