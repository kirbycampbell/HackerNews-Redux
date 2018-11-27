import React from "react";
import "./Stories.css";
import Story from "./Story.js";

const Stories = ({ stories }) => (
  <div className="stories">
    {(stories || []).map(story => (
      <Story key={story.objectId} story={story} />
    ))}
  </div>
);

export default Stories;
