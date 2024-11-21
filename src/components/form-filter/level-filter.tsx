import { LevelValues } from '../../types/camera';
import { Level } from './const';
import { isEnterKey, lowerFirstLetter } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLevels, toggleLevel } from '../../slices/filters/filters';

function LevelFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedLevels = useAppSelector(getLevels);

  const handleInputChange = (level: LevelValues) => {
    dispatch(toggleLevel(level));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {Object.entries(Level).map(([key, level]) => (
        <div className="custom-checkbox catalog-filter__item" key={key}>
          <label>
            <input
              type="checkbox"
              name={lowerFirstLetter(key)}
              checked={selectedLevels.includes(level)}
              onChange={() => handleInputChange(level)}
              onKeyDown={(evt) => {
                if (isEnterKey(evt)) {
                  evt.preventDefault();
                  handleInputChange(level);
                }
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{level}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default LevelFilter;
