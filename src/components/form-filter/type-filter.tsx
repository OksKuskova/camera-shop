import { isEnterKey, lowerFirstLetter } from '../../utils';
import { VIDEOCAMERA_DISABLED_TYPES, Category, CameraType } from './const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleType, getTypes, getCategory } from '../../slices/filters/filters';
import { CameraTypeValues } from '../../types/camera';

function TypeFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(getCategory);
  const selectedTypes = useAppSelector(getTypes);

  const handleInputChange = (type: CameraTypeValues) => {
    dispatch(toggleType(type));
  };

  const isDisabled = (type: CameraTypeValues) => {
    if (selectedCategory === Category.Videocamera) {
      return VIDEOCAMERA_DISABLED_TYPES.includes(type);
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {Object.entries(CameraType).map(([key, type]) => (
        <div className="custom-checkbox catalog-filter__item" key={key}>
          <label>
            <input
              type="checkbox"
              name={lowerFirstLetter(key)}
              checked={selectedTypes.includes(type)}
              disabled={isDisabled(type)}
              onChange={() => handleInputChange(type)}
              onKeyDown={(evt) => {
                if (isEnterKey(evt)) {
                  evt.preventDefault();
                  handleInputChange(type);
                }
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{type}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default TypeFilter;
