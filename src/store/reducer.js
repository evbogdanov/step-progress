import * as actions from './actions';

const initialState = {
  step: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_NEXT_STEP) {
    const nextStep = state.step + 1,
          stepClicked = action.data.stepClicked;
    if (stepClicked === nextStep) {
      return {
        ...state,
        step: nextStep
      };
    }
  }

  return state;
};

export default reducer;
