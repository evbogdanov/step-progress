import * as actions from "./actions";

const initialState = {
  step: 1
};

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_STEP) {
    const stepClicked = action.data.stepClicked;
    const nextOrPrevStep = Math.abs(stepClicked - state.step) === 1;
    if (nextOrPrevStep) {
      return {
        ...state,
        step: stepClicked
      };
    }
  }

  return state;
};

export default reducer;
