import deepFreeze from "deep-freeze";
import storyReducer from "./story";

describe("storyReducer", () => {
  it("adds stories to the next step", () => {
    const stories = ["a", "b", "c"];

    const action = {
      type: "STORIES_ADD",
      stories
    };

    const previousState = { stories: [], error: null };
    const expectedState = { stories, error: null };
    deepFreeze(previousState);
    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });
});
