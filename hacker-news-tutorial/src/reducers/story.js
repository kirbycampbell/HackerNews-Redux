const INITIAL_STATE = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walek",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://facebook.github.io/redux/",
    author: "Dan Abramaocx",
    num_comments: 23,
    points: 7,
    objectID: 1
  }
];

function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default storyReducer;
