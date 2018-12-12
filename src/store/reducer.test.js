import * as actions from './actions';
import reducer from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({step: 0});
  });

  it('should not update the state when the previous step is clicked ', () => {
    expect(reducer(
      {step: 1},
      {type: actions.SET_NEXT_STEP, data: {stepClicked: 0}}
    )).toEqual({step: 1});
  });

  it('should not update the state when the current step is clicked ', () => {
    expect(reducer(
      {step: 1},
      {type: actions.SET_NEXT_STEP, data: {stepClicked: 1}}
    )).toEqual({step: 1});
  });

  it('should update the state when the next step is clicked ', () => {
    expect(reducer(
      {step: 1},
      {type: actions.SET_NEXT_STEP, data: {stepClicked: 2}}
    )).toEqual({step: 2});
  });

  it('should not update the state when other step is clicked ', () => {
    expect(reducer(
      {step: 1},
      {type: actions.SET_NEXT_STEP, data: {stepClicked: 3}}
    )).toEqual({step: 1});
  });
});
