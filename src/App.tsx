import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile';
import { NotFound } from './pages/NotFound';
import { store } from './services/store';


export const App = () => (
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/users/:id' element={<UserProfile/>}/>
        <Route path='/not-found' element={<NotFound/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Provider>
  </HashRouter>
)
