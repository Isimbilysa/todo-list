
import './App.css'
import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import Work from './components/Work'


function App() {
  
  return (
    <div className='bg-black m-10 rounded-lg'>
      <Navbar/>
      <HomeSection/>
      <Work/>
      </div>
  )
}

export default App
