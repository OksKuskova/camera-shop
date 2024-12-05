export function useCurrentPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const pageFromUrl = queryParams.get('page');
  const currentPage = pageFromUrl ? parseInt(pageFromUrl, 10) : 1;

  return {
    currentPage
  };
}
