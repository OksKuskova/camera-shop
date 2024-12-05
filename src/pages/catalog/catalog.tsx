import { Helmet } from 'react-helmet-async';
import { useCatalog } from '../../hooks/use-catalog';
import { useFilters } from '../../hooks/use-filters';
import { Title } from '../../const';
import { ChangeEvent, useRef, useState } from 'react';
import { SortType } from '../../types/sort';
import { Sort } from '../../components/form-sort/const';
import { sortProducts } from '../../components/form-sort/utils';
import { PRODUCT_CARDS_PER_PAGE } from '../../components/catalog-pagination/const';
import { scrollToComponent } from '../../utils';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Loader from '../../components/loader/loader';
import FormSort from '../../components/form-sort/form-sort';
import FormFilter from '../../components/form-filter/form-filter';
import CatalogPagination from '../../components/catalog-pagination/catalog-pagination';

const { Type, Order } = Sort;

function Catalog(): JSX.Element {
  const catalogRef = useRef<HTMLElement>(null);

  const { products, isLoading } = useCatalog();
  const { filteredProducts } = useFilters(products);

  const [currentPagination, setCurrentPagination] = useState<number>(1);

  const [sort, setSort] = useState<SortType>({
    type: Type.PRICE,
    order: Order.ASCENDING,
  });

  const handlePaginationChange = (page: number) => {
    setCurrentPagination(page);
    scrollToComponent(catalogRef);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;
    setSort({...sort, [name]: id});
  };

  if (isLoading) {
    return <Loader />;
  }

  const sortedProducts = sortProducts(sort, filteredProducts);

  const startIndex = (currentPagination - 1) * PRODUCT_CARDS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + PRODUCT_CARDS_PER_PAGE);

  return (
    <>
      <Breadcrumbs />
      <section className="catalog" ref={catalogRef}>
        <Helmet>
          <title>{Title.Catalog}</title>
        </Helmet>
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <div className="catalog__aside">
              <FormFilter />
            </div>
            <div className="catalog__content">
              <FormSort onChange={handleInputChange} sort={sort}/>
              <div className="cards catalog__cards">
                {(currentProducts && currentProducts.length > 0) && currentProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
              {(sortedProducts && sortedProducts.length > PRODUCT_CARDS_PER_PAGE) && <CatalogPagination totalProducts={sortedProducts.length} onPageChange={handlePaginationChange}/>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
