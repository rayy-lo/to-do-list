import { getProjects } from "../utils/utils";

export const createStore = (data) => {
  let state = data;

  const getState = () => {
    return state;
  };

  const updateState = () => {
    const newState = getProjects();
    state = newState;
    return state;
  };

  return { getState, updateState };
};
