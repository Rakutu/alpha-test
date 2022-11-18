import { Link } from 'react-router-dom';
import './header.styles.scss';


export const Header = () => (
  <header className='header'>
    <div className='container'>
      <Link to='/' className='header__title'>
        <h1>Тестовое задание</h1>
      </Link>
    </div>
  </header>
)
