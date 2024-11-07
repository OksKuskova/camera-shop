import { Helmet } from 'react-helmet-async';
import { useCatalog } from '../../hooks/use-catalog';
import { Title } from '../../const';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Loader from '../../components/loader/loader';
import FormSort from '../../components/form-sort/form-sort';
import { ChangeEvent, useState } from 'react';
import { SortType } from '../../types/sort';
import { Sort } from '../../const';
import { sortProducts } from '../../components/form-sort/utils';

const { Type, Order } = Sort;

function Catalog(): JSX.Element {
  const { products, isLoading } = useCatalog();

  const [sort, setSort] = useState<SortType>({
    type: Type.PRICE,
    order: Order.ASCENDING,
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;
    setSort({...sort, [name]: id});
  };

  if (isLoading) {
    return <Loader />;
  }

  const sortedProducts = sortProducts(sort, products);

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
              <FormSort onChange={handleInputChange} sort={sort}/>
              <div className="cards catalog__cards">
                {sortedProducts.length > 0 && sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
