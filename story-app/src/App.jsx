import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Canvas from './components/main/canvas'

function App() {
  return (
    <>
      <Header />
      <div className='main flex'>
        <Sidebar /> 
        <Canvas />
      </div>
    </>
  )
}

export default App
