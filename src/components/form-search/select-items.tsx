import './select-item-style.css';
import { AppRoute } from '../../const';
import { SelectItem } from '../../types/selectItem';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { isEnterKey } from '../../utils';

type selectItemsProps = {
  items: SelectItem[];
  highlightedIndex: number;
  onMouseEnter: (index: number) => void;
}

function SelectItems({ items, highlightedIndex, onMouseEnter }: selectItemsProps): JSX.Element {
  const navigate = useNavigate();
  const selectedItemsRef = useRef<HTMLUListElement>(null);

  const handleMouseEnter = (index: number) => onMouseEnter(index);

  const handleSelectItem = (id: number) => {
    navigate(`${AppRoute.Product.replace(':id', `${id}`)}`);
  };

  useEffect(() => {
    if (selectedItemsRef.current && highlightedIndex >= 0) {

      const highlightedItem = selectedItemsRef.current.children[highlightedIndex] as HTMLElement;
      highlightedItem.focus();
    }
  }, [selectedItemsRef, highlightedIndex]);

  return (
    <ul
      className="form-search__select-list"
      style={items.length ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity: '0'}}
      ref={selectedItemsRef}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`form-search__select-item ${highlightedIndex === index ? 'highlighted' : ''}`}
          tabIndex={0}
          onClick={() => handleSelectItem(item.id)}
          onKeyDown={(evt) => {
            if (isEnterKey(evt)) {
              handleSelectItem(item.id);
            }
          }}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default SelectItems;
