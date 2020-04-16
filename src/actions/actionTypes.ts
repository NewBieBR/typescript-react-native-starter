/*
 *--------------------------------------------------*
 * Example:
 * APP = {
 * 	SET_STORE_STATE: 'APP/SET_STORE_STATE'
 * }
 *--------------------------------------------------*
 */
function createActionTypes(base: string, types: string[]) {
  const res: {[s: string]: string} = {};
  types.forEach((type) => (res[type] = `${base}/${type}`));
  return res;
}

export const APP = createActionTypes('APP', ['SET_STORE_STATE']);

export const USER = createActionTypes('USER', ['FETCH', 'FETCH_SUCCESS', 'FETCH_FAILURE']);

export default {
  app: APP,
  user: USER,
};
