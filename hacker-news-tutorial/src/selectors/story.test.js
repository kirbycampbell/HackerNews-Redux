import { getReadableStories } from "./story";

describe("storySelector", () => {
  it("retrieves readable stories from state", () => {
    const storyState = {
      error: null,
      stories: [{ objectID: 0, title: "foo" }, { objectID: 1, title: "bar" }]
    };

    const archiveState = [0];

    const state = { storyState, archiveState };

    const expectedReadableStories = [{ objectID: 1, title: "bar" }];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);
  });
});
