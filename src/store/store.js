export const createStore = (data) => {
  let state = data;

  const getState = () => {
    return state;
  };

  const updateState = (newState) => {
    state = newState;
    return state;
  };

  return { getState, updateState };
};
