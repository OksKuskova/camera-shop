import { ChangeEvent } from 'react';
import { SortType } from '../../types/sort';
import { Sort } from './const';
import { getSortingOrderLabel, getSortingTypeLabel } from './utils';

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
            {Object.values(Type).map((value) => (
              <div className="catalog-sort__btn-text" key={value}>
                <input type="radio" id={value} name="type" onChange={handleInputChange} checked={type === value}></input>
                <label htmlFor={value}>{getSortingTypeLabel(value)}</label>
              </div>
            ))}
          </div>
          <div className="catalog-sort__order">
            {Object.values(Order).map((value) => (
              <div className={`catalog-sort__btn catalog-sort__btn--${value}`} key={value}>
                <input type="radio" id={value} name="order" onChange={handleInputChange} checked={order === value} aria-label={getSortingOrderLabel(value)}></input>
                <label htmlFor={value}>
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-sort"></use>
                  </svg>
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSort;
