import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile';
import { NotFound } from './pages/NotFound';
import { store } from './services/store';


export const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index path='/alpha-test' element={<Home/>}/>
        <Route path='alpha-test/users/:id' element={<UserProfile/>}/>
        <Route path='alpha-test/not-found' element={<NotFound/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)