import './not-found.css';

function NotFound(): JSX.Element {
  return (
    <section className='not-found'>
      <div className="not-found__container container">
        <h1 className="title title--h2">404. Страница не найдена.</h1>
        <a className="btn btn--purple" href="#">Вернуться на главную</a>
      </div>
    </section>
  );
}

export default NotFound;
