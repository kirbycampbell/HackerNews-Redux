import { STORY_ARCHIVE } from "../constants/actionTypes";

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) => [...state, action.id];

function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE: {
      const newState = applyArchiveStory(state, action);
      return newState;
    }
    default:
      return state;
  }
}

export default archiveReducer;
