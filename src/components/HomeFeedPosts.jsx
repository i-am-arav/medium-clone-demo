import React from "react";
import homeFeedPost from "../tempUtils/homeFeedPost";
import FeedPost from "./FeedPost";

const HomeFeedPosts = ({posts = []}) => {
  const postss = [...homeFeedPost, ...homeFeedPost, ...homeFeedPost]
  return (
    <div className="mt-4">
      {postss.map(
        ({
          name,
          domain,
          postTitle,
          subTitle,
          datePosted,
          readDuration,
          tags,
          imgUrl,
          iconUrl,
        }) => (
          <FeedPost
            name={name}
            domain={domain}
            postTitle={postTitle}
            subTitle={subTitle}
            datePosted={datePosted}
            readDuration={readDuration}
            tags={tags}
            imgUrl={imgUrl}
            iconUrl={iconUrl}
          />
        )
      )}
    </div>
  );
};

export default HomeFeedPosts;


