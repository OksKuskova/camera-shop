import { useAppDispatch } from '../../hooks';
import { resetFilters } from '../../slices/filters/filters';
import { isEnterKey } from '../../utils';
import CategoryFilter from './category-filter';
import LevelFilter from './level-filter';
import PriceFilter from './price-filter';
import TypeFilter from './type-filter';

function FormFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <PriceFilter />
        <CategoryFilter />
        <TypeFilter />
        <LevelFilter />
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
          onClick={handleButtonClick}
          onKeyDown={(evt) => {
            if (isEnterKey(evt)) {
              evt.preventDefault();
              handleButtonClick();
            }
          }}
        >Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default FormFilter;
