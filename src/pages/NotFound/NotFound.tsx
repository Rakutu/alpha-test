import { Link } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks';
import { Header } from '../../components/Header';
import './notFound.styles.scss';


export const NotFound: React.FC = () => {
  const { error } = useAppSelector(({ users }) => users);

  return (
    <main>
      <Header/>
      <div className='container'>
        <div className='notFound'>
          <h2 className='notFound__title'>Oops!</h2>
          {error
            ? <p>{error}</p>
            : <p>Page not found</p>
          }
          <Link className='link' to='/alpha-test'>Go Home</Link>
        </div>
      </div>
    </main>
  )
}