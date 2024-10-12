import { useContext } from 'react'
import './App.css'
import LoginRoutes from "./routes/login"
import { Context } from './context/context'
import DashboardRoutes from './routes/dashboard'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  Aos.init();
  const {token} = useContext(Context)

  if(token){
    return <DashboardRoutes/>
  }
  else{
   return <LoginRoutes/>
  }
}

export default App
