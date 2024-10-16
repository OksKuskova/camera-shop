import { Link, useLocation } from 'react-router-dom';
import { AppRoute, Title } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentProductInfo } from '../../slices/product/product';

function Breadcrumbs(): JSX.Element {
  const {pathname} = useLocation();
  const currentProduct = useAppSelector(getCurrentProductInfo);

  type Crumb = {
    name: string;
    to: string;
  }
  const paths = pathname.split('/').filter((path) => path);

  const breadcrumbs: Crumb[] = [{name: Title.Main, to: AppRoute.Root}, {name: Title.Catalog, to: AppRoute.Root}];

  if (paths.length) {
    if (paths[0] === AppRoute.Product.slice(1, 7) && currentProduct) {
      breadcrumbs.push({name: currentProduct.name, to: `/${paths.join('/')}`});
    }
  }

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbs.map(({name, to}, index) => (
            <li key={name} className="breadcrumbs__item">
              {index < breadcrumbs.length - 1 ? (
                <Link className="breadcrumbs__link" to={to}>{name}
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </Link>
              ) : (
                <span className="breadcrumbs__link breadcrumbs__link--active">{name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
