import * as actions from './actions';
import reducer from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({step: 0});
  });

  it('should update the state only when the next step is clicked', () => {
    const steps = [
      {stepBefore: 1, stepClicked: 0, stepAfter: 1},
      {stepBefore: 1, stepClicked: 1, stepAfter: 1},
      {stepBefore: 1, stepClicked: 2, stepAfter: 2},
      {stepBefore: 1, stepClicked: 3, stepAfter: 1},
    ];
    for (const {stepBefore, stepClicked, stepAfter} of steps) {
      expect(reducer(
        {step: stepBefore},
        {type: actions.SET_NEXT_STEP, data: {stepClicked}}
      )).toEqual({step: stepAfter});
    }
  });
});
