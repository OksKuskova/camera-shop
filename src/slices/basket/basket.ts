import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBasketItem } from '../../types/basket-item';
import { SliceName } from '../const';
import { State } from '../../store/type';
import { Quantity } from '../../components/basket-item/const';

type BasketState = {
  items: TBasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: SliceName.Basket,
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TBasketItem>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[itemIndex].quantity += Quantity.Step;
      }
    },
    updateItem: (state, action: PayloadAction<TBasketItem>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const getBasketItems = (state: State) => state[SliceName.Basket].items;

export const { addItem, updateItem, removeItem, clearBasket } = basketSlice.actions;
export default basketSlice;
