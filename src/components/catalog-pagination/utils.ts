
import { PAGE_LINKS_PER_VIEW, PAGINATION_STEP } from './const';
import { Pagination } from '../../types/pagination';

export const getPaginationLinks = (currentPage: number, totalPages: number, { start, end }: Pagination) => {

  const generatePaginationLinks = (startPage: number, endPage: number) => Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  let startPage = start;
  let endPage = end;

  if (startPage <= currentPage && currentPage <= endPage) {

    return {
      paginationLinks: generatePaginationLinks(startPage, endPage),
      startPage,
      endPage,
    };
  }

  startPage = Math.floor((currentPage - 1) / PAGE_LINKS_PER_VIEW) * PAGE_LINKS_PER_VIEW + 1;
  endPage = startPage + 2;

  if (currentPage + PAGINATION_STEP >= totalPages) {
    endPage = totalPages;
    startPage = endPage - PAGINATION_STEP;
  }

  return {
    paginationLinks: generatePaginationLinks(startPage, endPage),
    startPage,
    endPage,
  };
};
