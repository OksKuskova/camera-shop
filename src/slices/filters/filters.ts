import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../store/type';
import { SliceName } from '../const';
import { CategoryValues, CameraTypeValues, LevelValues } from '../../types/camera';
import { VIDEOCAMERA_DISABLED_TYPES } from '../../components/form-filter/const';

type FiltersState = {
  minPrice: number | null;
  maxPrice: number | null;
  category: CategoryValues | null;
  types: CameraTypeValues[];
  levels: LevelValues[];
}

const initialState: FiltersState = {
  minPrice: null,
  maxPrice: null,
  category: null,
  types: [],
  levels: [],
};

const filtersSlice = createSlice({
  name: SliceName.Filters,
  initialState,
  reducers: {
    setMinPrice(state, action: PayloadAction<number | null>) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number | null>) {
      state.maxPrice = action.payload;
    },
    setCategory(state, action: PayloadAction<CategoryValues>) {
      state.category = action.payload;
    },
    toggleType(state, action: PayloadAction<CameraTypeValues>) {
      const typeIndex = state.types.indexOf(action.payload);
      if (typeIndex === -1) {
        state.types.push(action.payload);
      } else {
        state.types = state.types.filter((type) => type !== action.payload);
      }
    },
    resetUnavailableType(state) {
      VIDEOCAMERA_DISABLED_TYPES.forEach((value) => {
        const typeIndex = state.types.indexOf(value);
        if (typeIndex >= 0) {
          state.types = state.types.filter((type) => type !== value);
        }
      });
    },
    toggleLevel(state, action: PayloadAction<LevelValues>) {
      const levelIndex = state.levels.indexOf(action.payload);
      if (levelIndex === -1) {
        state.levels.push(action.payload);
      } else {
        state.levels = state.levels.filter((level) => level !== action.payload);
      }
    },
    resetFilters(state) {
      state.minPrice = null;
      state.maxPrice = null;
      state.category = null;
      state.types = [];
      state.levels = [];
    }
  },
});

export const getMinPrice = (state: State) => state[SliceName.Filters].minPrice;
export const getMaxPrice = (state: State) => state[SliceName.Filters].maxPrice;
export const getCategory = (state: State) => state[SliceName.Filters].category;
export const getTypes = (state: State) => state[SliceName.Filters].types;
export const getLevels = (state: State) => state[SliceName.Filters].levels;

export const {setMinPrice, setMaxPrice, setCategory, toggleType, resetUnavailableType, toggleLevel, resetFilters} = filtersSlice.actions;

export default filtersSlice;
