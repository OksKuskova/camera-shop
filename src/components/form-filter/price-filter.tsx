/* eslint-disable no-mixed-spaces-and-tabs */
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setMinPrice, setMaxPrice } from '../../slices/filters/filters';
import { PriceRange } from './const';
import { calculatePriceRange, getPriceRangePlaceholder } from './utils';
import { useCategoryTypeLevelFilters } from '../../hooks/use-category-type-level-filters';
import { useCatalog } from '../../hooks/use-catalog';
import { isEnterKey } from '../../utils';

function PriceFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const [enteredMinPrice, setEnteredMinPrice] = useState<string>('');
  const [enteredMaxPrice, setEnteredMaxPrice] = useState<string>('');

  const [minPriceValue, setMinPriceValue] = useState<number | null>(null);
  const [maxPriceValue, setMaxPriceValue] = useState<number | null>(null);

  const { products } = useCatalog();
  const { productsFilteredByCategoryTypeLevel } = useCategoryTypeLevelFilters(products);

  useEffect(() => {
    const { minPrice, maxPrice } = calculatePriceRange(productsFilteredByCategoryTypeLevel);

    setMinPriceValue(minPrice);
    setMaxPriceValue(maxPrice);
  }, [productsFilteredByCategoryTypeLevel]);

  const updatePrice = (range: string) => {
    if (range === PriceRange.MIN) {
      if (!enteredMinPrice) {
        dispatch(setMinPrice(null));
        return;
      }
      const correctMinPrice = minPriceValue === null ? Number(enteredMinPrice) : Math.max(Number(enteredMinPrice), minPriceValue);
      dispatch(setMinPrice(correctMinPrice));
      setEnteredMinPrice(String(correctMinPrice));
    } else {
      if (!enteredMaxPrice) {
        dispatch(setMaxPrice(null));
        return;
      }
      const checkedEnteredMaxPrice = enteredMinPrice && (Number(enteredMinPrice) > Number(enteredMaxPrice)) ? Number(enteredMinPrice) : Number(enteredMaxPrice);
      const correctMaxPrice = maxPriceValue === null ? checkedEnteredMaxPrice : Math.min(checkedEnteredMaxPrice, maxPriceValue);
      dispatch(setMaxPrice(correctMaxPrice));
      setEnteredMaxPrice(String(correctMaxPrice));
    }
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
      return;
    }

    if (name === PriceRange.MIN) {
      setEnteredMinPrice(value);
    } else {
      setEnteredMaxPrice(value);
    }
  };

  const handleInputBlur = (range: string) => {
    updatePrice(range);
  };

  const handleEnterKeyDown = (range: string) => {
    updatePrice(range);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        {Object.values(PriceRange).map((range) => (
          <div className="custom-input" key={range}>
            <label>
              <input
                type="number"
                name={range}
					 min={minPriceValue || 0}
					 max={maxPriceValue || 1000000}
                placeholder={getPriceRangePlaceholder(range, minPriceValue, maxPriceValue)}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur(range)}
                onKeyDown={(evt) => {
                  if (isEnterKey(evt)) {
                    evt.preventDefault();
                    handleEnterKeyDown(range);
                  }
                }}
                value={range === PriceRange.MIN ? enteredMinPrice : enteredMaxPrice}
              >
              </input>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PriceFilter;
