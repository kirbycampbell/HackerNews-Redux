import React from "react";
import { connect } from "react-redux";
import { doArchiveStory } from "../actions/archive";
import { getReadableStories } from "../selectors/story";
import "./Stories.css";
import Story from "./Story.js";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: "Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    width: ""
  }
};

const Stories = ({ stories, onArchive }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />

    {(stories || []).map(story => (
      <Story
        key={story.objectId}
        story={story}
        columns={COLUMNS}
        onArchive={onArchive}
      />
    ))}
  </div>
);

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(COLUMNS).map(key => (
      <span key={key} style={{ width: COLUMNS[key].width }}>
        {COLUMNS[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
