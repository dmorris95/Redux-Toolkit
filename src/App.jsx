import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './components/Home';
import Exercises from './components/Exercises';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <NavigationBar />
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
      </Routes>
    </Provider>
    </>
  )
}

export default App
