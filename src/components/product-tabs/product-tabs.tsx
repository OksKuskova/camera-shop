import { useState } from 'react';
import { Tab } from './const';
import { Camera } from '../../types/camera';

type ProductTabsProps = Pick<Camera, 'category' | 'description' | 'level' | 'vendorCode' | 'type'>

function ProductTabs({ category, description, level, vendorCode, type}: ProductTabsProps):JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Parametrs);

  const handleButtonClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${activeTab === Tab.Parametrs ? 'is-active' : ''}`} type="button" onClick={() => handleButtonClick(Tab.Parametrs)}>Характеристики</button>
        <button className={`tabs__control ${activeTab === Tab.Description ? 'is-active' : ''}`} type="button" onClick={() => handleButtonClick(Tab.Description)}>Описание</button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${activeTab === Tab.Parametrs ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${activeTab === Tab.Description ? 'is-active' : ''}`}>
          <div className="product__tabs-text">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
