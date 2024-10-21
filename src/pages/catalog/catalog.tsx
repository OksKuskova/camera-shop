import { Helmet } from 'react-helmet-async';
import { useCatalog } from '../../hooks/use-catalog';
import { Title } from '../../const';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

function Catalog(): JSX.Element {
  const { products } = useCatalog();

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
              {/* div class="catalog-filter" */}
            </div>
            <div className="catalog__content">
              {/* div class="catalog-sort" */}
              <div className="cards catalog__cards">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
              {/* div class="pagination" */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
