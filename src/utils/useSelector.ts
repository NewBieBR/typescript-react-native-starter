import {useSelector as useReduxSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from 'src/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
