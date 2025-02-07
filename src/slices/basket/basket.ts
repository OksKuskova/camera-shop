import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBasketItem } from '../../types/basket-item';
import { SliceName } from '../const';
import { State } from '../../store/type';
import { Quantity } from '../../components/basket-item/const';
import { postPromoCode } from '../../thunk-actions/promo-code';
import { RequestStatus } from '../../const';

type BasketState = {
  items: TBasketItem[];
  discount: number;
  coupon: string | null;
  requestStatus: RequestStatus;
}

const initialState: BasketState = {
  items: [],
  discount: 0,
  coupon: null,
  requestStatus: RequestStatus.Idle,
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
    setCoupon: (state, action: PayloadAction<string>) => {
      state.coupon = action.payload;
    },
    clearBasket: (state) => {
      state.items = [];
      state.discount = 0;
      state.coupon = null;
      state.requestStatus = RequestStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postPromoCode.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(postPromoCode.fulfilled, (state, action) => {
        state.discount = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(postPromoCode.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  }
});

export const getBasketItems = (state: State) => state[SliceName.Basket].items;
export const getDiscount = (state: State) => state[SliceName.Basket].discount;
export const getCoupon = (state: State) => state[SliceName.Basket].coupon;
export const getStatus = (state: State) => state[SliceName.Basket].requestStatus;

export const { addItem, updateItem, removeItem, setCoupon, clearBasket } = basketSlice.actions;
export default basketSlice;
