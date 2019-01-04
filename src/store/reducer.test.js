import * as actions from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ step: 1 });
  });

  it("should update the state only when the nearest step is clicked", () => {
    const steps = [
      // Current step
      { stepBefore: 1, stepClicked: 1, stepAfter: 1 },

      // Next steps
      { stepBefore: 1, stepClicked: 2, stepAfter: 2 },
      { stepBefore: 1, stepClicked: 3, stepAfter: 1 },

      // Previous steps
      { stepBefore: 3, stepClicked: 1, stepAfter: 3 },
      { stepBefore: 3, stepClicked: 2, stepAfter: 2 }
    ];
    for (const { stepBefore, stepClicked, stepAfter } of steps) {
      expect(
        reducer(
          { step: stepBefore },
          { type: actions.SET_STEP, data: { stepClicked } }
        )
      ).toEqual({ step: stepAfter });
    }
  });
});
