import { isEnterKey, lowerFirstLetter } from '../../utils';
import { Category } from './const';
import { CategoryValues } from '../../types/camera';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategory, getCategory, resetUnavailableType } from '../../slices/filters/filters';

function CategoryFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(getCategory);

  const handleInputChange = (category: CategoryValues) => {
    dispatch(setCategory(category));

    if (category === Category.Videocamera) {
      dispatch(resetUnavailableType());
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {Object.entries(Category).map(([key, category]) => (
        <div className="custom-radio catalog-filter__item" key={key}>
          <label>
            <input
              type="radio"
              name="category"
              value={lowerFirstLetter(key)}
              checked={selectedCategory === category}
              onChange={() => handleInputChange(category)}
              onKeyDown={(evt) => {
                if (isEnterKey(evt)) {
                  evt.preventDefault();
                  handleInputChange(category);
                }
              }}
            >
            </input>
            <span className="custom-radio__icon"></span>
            <span className="custom-radio__label">{category}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
