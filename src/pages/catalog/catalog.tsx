import { Helmet } from 'react-helmet-async';
import { useCatalog } from '../../hooks/use-catalog';
import { Title } from '../../const';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Loader from '../../components/loader/loader';

function Catalog(): JSX.Element {
  const { products, isLoading } = useCatalog();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumbs />
      <section className="catalog">
        <Helmet>
          <title>{Title.Catalog}</title>
        </Helmet>
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <div className="catalog__aside">
              <img src="img/banner.png"></img>
            </div>
            <div className="catalog__content">
              <div className="cards catalog__cards">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
