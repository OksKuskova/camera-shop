type BasketItemTotalPriceProps = {
  price: number;
  quantity: number;
}

function BasketItemTotalPrice({ price, quantity }: BasketItemTotalPriceProps): JSX.Element {
  const totalPrice = price * quantity;

  return (
    <div className="basket-item__total-price">
      <span className="visually-hidden">Общая цена:</span>{totalPrice} ₽
    </div>
  );
}

export default BasketItemTotalPrice;
