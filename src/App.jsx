import Biodata from './components/biodata'
import './App.css'

function App() {
  return (
    <>
      <Biodata 
      
        name="Mostafa Raihan"
        email="raihan.invite@gmail.com"
        phone="+880 01971595464"
        skills={['JavaScript', 'React', 'Django', 'Python']}
        socialLinks={[
          { platformName: 'LinkedIn', url: 'https://www.linkedin.com/in/raihanstack/' },
          { platformName: 'GitHub', url: 'https://github.com/raihanstack' }
        ]}
      />
    </>
  )
}


export default App
