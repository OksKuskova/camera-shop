import { SyntheticEvent } from 'react';

function UpButton(): JSX.Element {
  const handleButtonClick = (event: SyntheticEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a className="up-btn" onClick={handleButtonClick}>
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </a>
  );
}

export default UpButton;
