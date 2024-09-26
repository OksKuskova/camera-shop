import './not-found.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <section className='not-found'>
      <div className="not-found__container container">
        <h1 className="title title--h2">404. Страница не найдена.</h1>
        <Link className="btn btn--purple" to={AppRoute.Root}>Вернуться на главную</Link>
      </div>
    </section>
  );
}

export default NotFound;
