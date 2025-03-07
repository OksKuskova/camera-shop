import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import NotFound from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Basket from '../../pages/basket/basket';

function App(): JSX.Element {
  return (
    <HelmetProvider >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path={AppRoute.Product} element={<Product />} />
            <Route path={AppRoute.Basket} element={<Basket />} />
            <Route path={AppRoute.NotFound} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

