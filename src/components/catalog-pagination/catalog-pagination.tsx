import { Link, useLocation } from 'react-router-dom';
import { PAGE_LINKS_PER_VIEW, PRODUCT_CARDS_PER_PAGE } from './const';
import { getPaginationLinks } from './utils';
import { useCurrentPage } from '../../hooks/use-current-page';
import { useState } from 'react';
import { Pagination } from '../../types/pagination';

type CatalogPaginationProps = {
  totalProducts: number;
  onPageChange: (page: number) => void;
}

function CatalogPagination({totalProducts, onPageChange}: CatalogPaginationProps): JSX.Element {
  const [pagination, setPagination] = useState<Pagination>({
    start: 1,
    end: PAGE_LINKS_PER_VIEW,
  });

  const location = useLocation();
  const { currentPage } = useCurrentPage();

  const totalPages = Math.ceil(totalProducts / PRODUCT_CARDS_PER_PAGE);

  const { paginationLinks, startPage, endPage } = getPaginationLinks(currentPage, totalPages, pagination);

  if (pagination.start !== startPage && pagination.end !== endPage) {
    setPagination({
      start: startPage,
      end: endPage,
    });
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        { (currentPage >= PAGE_LINKS_PER_VIEW && endPage > PAGE_LINKS_PER_VIEW) && (
          <li className="pagination__item">
            <Link
              className="pagination__link pagination__link--text"
              to={`${location.pathname}?page=${startPage - 1}`}
              onClick={() => onPageChange(startPage - 1)}
            >
              Назад
            </Link>
          </li>
        )}

        {paginationLinks.map((page) => (
          <li className="pagination__item" key={page}>
            <Link
              className={`pagination__link ${currentPage === page ? 'pagination__link--active' : ''}`}
              to={`${location.pathname}?page=${page}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}

        {(totalPages > PAGE_LINKS_PER_VIEW && totalPages > endPage) && (
          <li className="pagination__item">
            <Link
              className="pagination__link pagination__link--text"
              to={`${location.pathname}?page=${endPage + 1}`}
              onClick={() => onPageChange(endPage + 1)}
            >
              Далее
            </Link>
          </li>
        )}

      </ul>
    </div>
  );
}

export default CatalogPagination;

