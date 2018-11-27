import { doAddStories } from "./story";

describe("storyActions", () => {
  it("adds stories to an action object", () => {
    const stories = ["a", "b"];

    const expectedAction = {
      type: "STORIES_ADD",
      stories
    };

    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });
});
