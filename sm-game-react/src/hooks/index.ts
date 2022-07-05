import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {AppDispatch, RootState} from "../reduxs/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
