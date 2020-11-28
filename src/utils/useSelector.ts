import {createSelectorHook} from 'react-redux';
import {RootAction} from '../actions/actionTypes';
import {RootState} from '../store';

const useSelector = createSelectorHook<RootState, RootAction>();
export default useSelector;
