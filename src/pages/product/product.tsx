import { useParams } from 'react-router-dom';
import { getProductById } from '../../mocks/cameras';
import { getReviews } from '../../mocks/reviews';
import { ClassName } from '../../const';
import NotFound from '../not-found/not-found';
import ProductImage from '../../components/product-image/product-image';
import Rate from '../../components/rate/rate';
import Price from '../../components/price/price';
import ProductTabs from '../../components/product-tabs/product-tabs';
import ReviewBlock from '../../components/review-block/review-block';


function Product(): JSX.Element {
  const { id: productId } = useParams();
  const currentProduct = getProductById(productId as string);
  const reviews = getReviews();

  if (!currentProduct) {
    return <NotFound />;
  }

  const { id, name, vendorCode, type, category, description, level, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = currentProduct;

  return (
    <>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product__img">
              <ProductImage previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} name={name} />
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{name}</h1>
              <Rate rating={rating} reviewCount={reviewCount} className={ClassName.Product}/>
              <Price price={price} />
              <button className="btn btn--purple" type="button">
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>Добавить в корзину
              </button>
              <ProductTabs vendorCode={vendorCode} type={type} category={category} description={description} level={level} />
            </div>
          </div>
        </section>
      </div>
      {/* div className="page-content__section" */}
      <div className="page-content__section">
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
            </div>
            <ReviewBlock reviews={reviews}/>
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button">Показать больше отзывов</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;
