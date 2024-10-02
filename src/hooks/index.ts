import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { State, AppDispatch } from '../store/type';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
