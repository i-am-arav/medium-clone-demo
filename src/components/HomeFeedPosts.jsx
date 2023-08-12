import React from "react";
import homeFeedPost from "../tempUtils/homeFeedPost";
import Pill from "./Pill";

const HomeFeedPosts = () => {

  return (
    <div>
      {homeFeedPost.map(
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

const FeedPost = ({
  iconUrl,
  imgUrl,
  name,
  domain,
  postTitle,
  subTitle,
  datePosted,
  readDuration,
  tags = [],
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className=" col-span-2 flex flex-col mb-2">
        <div className='flex items-center space-x-2'>
          <img src={'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774'} className='w-6 h-6 rounded-lg object-contain border-black border-2' />
          <p className="text-sm font-semibold">{name} {domain &&<><span className="text-gray-500">in</span> <span>{domain}</span></>}</p>
        </div>
        <p className="text-2xl font-bold mb-1">{postTitle}</p>
        <p className="max-h-12 text-gray-400 mb-2 line-clamp-2">{subTitle}</p>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <p className="text-gray-400">{`${datePosted} . ${readDuration} min Read . `}</p>
            {tags.map((tag) => <Pill text={tag} />)}
          </div>

        </div>

      </div>
      <img className="max-h-[134px]" src={'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774'} />

    </div>
  );
};
