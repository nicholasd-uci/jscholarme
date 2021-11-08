import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
   <div className='App'>
   <Router>
    <header/>
    <Switch>

    <h1>Hello World!</h1>

    </Switch>


    <footer/>
    </Router>
   </div>
  )
}

export default App
