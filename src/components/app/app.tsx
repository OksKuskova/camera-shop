import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import NotFound from '../../pages/not-found/not-found';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path={AppRoute.Product} element={<Product />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

