import React from "react";
import homeFeedPost from "../tempUtils/homeFeedPost";
import Pill from "./Pill";

const HomeFeedPosts = () => {

  return (
    <div className="mt-4">
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
      <div className=" col-span-2 flex flex-col mb-8 md:mb-12 pr-2">
        <div className='flex items-center space-x-2'>
          <img src={iconUrl} className='w-6 h-6 rounded-lg object-contain border-gray-200 border-1' />
          <p className="text-xs md:text-sm font-semibold">{name} {domain &&<><span className="text-gray-500">in</span> <span>{domain}</span></>}</p>
        </div>
        <p className="text-base md:text-[20px] font-bold mb-2 md:mb-1">{postTitle}</p>
        <p className="hidden md:block max-h-12 text-gray-400 mb-2 line-clamp-2">{subTitle}</p>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <p className="text-sm md:text-base text-gray-400">{`${datePosted} . ${readDuration} min Read . `}</p>
            {tags.map((tag) => <Pill text={tag} className='hidden md:flex' />)}
          </div>

        </div>

      </div>
      <img className="h-[100px] w-[100px]  md:h-[134px] md:w-[200px] rounded-sm object-cover" src={imgUrl} />

    </div>
  );
};
