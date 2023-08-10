import React from "react";
import trendingPostData from "../tempUtils/trendingPostData";

const TrendingPost = () => {
  return (
    <div className="py-10 mx-10 flex w-full md:w-2/3 md:justify-center ">
      <p className="">Trending on Medium</p>
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
      <p className="text-5xl text-gray-50 hover:text-gray-300">
        {formattedNumber}
      </p>
      <div className="flex flex-col space-y-4 mt-2">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full object-cover " src={imgUrl} />
          <p className="ml-3 font-medium text-sm">{userName}</p>
        </div>
        <p className="font-bold">{postTitle}</p>
        <p className="text-xs text-gray-400">{`${datePosted} . ${readDuration}min Read`}</p>
      </div>
    </div>
  );
};
