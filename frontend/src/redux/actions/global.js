export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const showLoaderAction = () => ({ type: SHOW_LOADER });
export const hideLoaderAction = () => ({ type: HIDE_LOADER });

export const showErrorAction = (payload) => ({ type: SHOW_ERROR, payload });
export const hideErrorAction = () => ({ type: HIDE_ERROR });
