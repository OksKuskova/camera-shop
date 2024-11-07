import { ChangeEvent } from 'react';
import { SortType } from '../../types/sort';
import { Sort } from '../../const';

const { Type, Order } = Sort;

type FormSortProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  sort: SortType;
}

function FormSort({ onChange, sort }: FormSortProps): JSX.Element {
  const { type, order } = sort;

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" id="price" name="type" onChange={handleInputChange} checked={type === Type.PRICE}></input>
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" id="rating" name="type" onChange={handleInputChange} checked={type === Type.POPULAR}></input>
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio" id="up" name="order" onChange={handleInputChange} checked={order === Order.ASCENDING} aria-label="По возрастанию"></input>
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio" id="down" name="order" onChange={handleInputChange} checked={order === Order.DESCENDING} aria-label="По убыванию"></input>
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSort;
