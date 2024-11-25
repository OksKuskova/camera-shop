import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';
import { SelectItem } from '../../types/selectItem';
import { useCatalog } from '../../hooks/use-catalog';
import { INDEX_DEFAULT, SEARCH_MIN_LENGTH } from './const';
import { isEnterKey } from '../../utils';
import SelectItems from './select-items';

function FormSearch(): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchData, setSearchData] = useState('');
  const [selectItems, setSelectItems] = useState<SelectItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(INDEX_DEFAULT);

  const { products } = useCatalog();

  const handleInputClick = () => {
    setHighlightedIndex(INDEX_DEFAULT);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchData(value);

    if (value.length >= SEARCH_MIN_LENGTH) {
      const items: SelectItem[] = products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
      setSelectItems(items);
    } else {
      setSelectItems([]);
    }
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLFormElement>) => {
    const moveUp = () => {
      evt.preventDefault();
      setHighlightedIndex((prevIndex) =>
        Math.max(prevIndex - 1, 0)
      );
    };

    const moveDown = () => {
      evt.preventDefault();
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, selectItems.length - 1)
      );
    };

    const handleTab = (isShiftPressed: boolean) => {
      if (isShiftPressed) {
        if (highlightedIndex === 0) {
          evt.preventDefault();
          inputRef.current?.focus();
        } else {
          moveUp();
        }
      } else {
        if (highlightedIndex === selectItems.length - 1) {
          evt.preventDefault();
          buttonRef.current?.focus();
        } else {
          moveDown();
        }
      }
    };

    switch (evt.key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'Tab':
        handleTab(evt.shiftKey);
        break;
      case 'Enter':
        evt.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleMouseEnter = (index: number) => {
    setHighlightedIndex(index);
  };

  const handleFormClear = () => {
    setSearchData('');
    setSelectItems([]);
    setHighlightedIndex(-1);
  };

  return (
    <div className="form-search">
      <form
        onKeyDown={(evt) => handleKeyDown(evt)}
      >
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchData}
            ref={inputRef}
            onChange={handleInputChange}
            onFocus={handleInputClick}
          >
          </input>
        </label>
        {selectItems.length > 0 && <SelectItems items={selectItems} highlightedIndex={highlightedIndex} onMouseEnter={handleMouseEnter}/>}
      </form>
      {searchData.length > 0 && (
        <button
          className="form-search__reset"
          type="reset"
          style={{display: 'flex'}}
          ref={buttonRef}
          onClick={handleFormClear}
          onKeyDown={(evt) => {
            if (isEnterKey(evt)) {
              handleFormClear();
            }
          }}
        >
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
          <span className="visually-hidden">Сбросить поиск</span>
        </button>
      )}
    </div>
  );
}

export default FormSearch;
