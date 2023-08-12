import React from "react";
import trendingPostData from "../tempUtils/trendingPostData";

const TrendingPost = () => {
  return (
    <div className="flex flex-col mx-6 pt-10 pb-6 md:mx-16 border-b border-gray-100 mb-4">
      <div><i class="fad fa-analytics mr-2 text-black"></i><p className="font-semibold">Trending on Medium</p></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-4">
        {trendingPostData.map((post, idx) => (
          <Post
            postNumber={idx + 1}
            userName={post.userName}
            imgUrl={post.imgUrl}
            datePosted={post.datePosted}
            readDuration={post.readDuration}
            postTitle={post.postTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingPost;

const Post = ({
  postNumber,
  imgUrl,
  userName,
  postTitle,
  datePosted,
  readDuration,
}) => {
  const formattedNumber = postNumber < 10 ? "0" + postNumber : postNumber;
  return (
    <div className="flex space-x-5 cursor-pointer">
      <p className="text-5xl text-gray-100 hover:text-gray-300">
        {formattedNumber}
      </p>
      <div className="flex flex-col space-y-2 mt-1 md:mt-2">
        <div className="flex items-center">
          <img className="w-6 h-6 rounded-full object-cover " src={imgUrl} />
          <p className="ml-3 font-medium text-sm">{userName}</p>
        </div>
        <p className="font-bold">{postTitle}</p>
        <p className="text-xs text-gray-400">{`${datePosted} . ${readDuration}min Read`}</p>
      </div>
    </div>
  );
};
