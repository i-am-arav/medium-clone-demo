import React from 'react'
import { useNavigate } from 'react-router-dom';
import Pill from './Pill';

const FeedPost = ({
    className,
    iconUrl,
    imgUrl,
    name,
    domain= '',
    postTitle,
    subTitle,
    datePosted = '',
    readDuration = '',
    tags = [],
    slug = '404',
    isHomePost
  }) => {
    const navigate = useNavigate();
    const isShowMetaDetails = (datePosted || readDuration || tags.length >0) 
    return (
      <div className={`grid grid-cols-3 cursor-pointer ${className}`} onClick={() => navigate(`/${slug}`)}>
        <div className={`col-span-2   ${!imgUrl && 'col-span-3'} flex flex-col  ${isShowMetaDetails && 'mb-8 md:mb-12'} pr-2`}>
          <div className='flex items-center space-x-2'>
            <img src={imgUrl} className='w-6 h-6 rounded-lg object-contain border-gray-200 border-1' />
            <p className="text-xs md:text-sm font-semibold">{name} {isHomePost ? (datePosted && <span className="text-gray-500 ml-2">{datePosted}</span>) : domain &&<><span className="text-gray-500">in</span> <span>{domain}</span></>}</p>
          </div>
          <p className="text-base md:text-[20px] font-bold mb-2 md:mb-1">{postTitle}</p>
          <p className={`hidden md:block max-h-20 ${isHomePost ? 'text-black' : 'text-gray-400'} mb-2 ${isHomePost ? 'line-clamp-3' : 'line-clamp-2'} text-ellipsis`}>{subTitle}</p>
          {isShowMetaDetails && <div className="flex justify-between">
            <div className={`flex space-x-2 items-center ${isHomePost && 'flex-row-reverse'}`}>
              <p className="text-sm md:text-base text-gray-400">{`${isHomePost ? '' : datePosted} . ${readDuration} min Read . `}</p>
              {tags.length> 0  && tags.map((tag) => <Pill text={tag} className='hidden md:flex' />)}
            </div>
  
          </div>}
  
        </div>
        {imgUrl && <img className="h-[100px] w-[100px]  md:h-[134px] md:w-[200px] rounded-sm object-cover" src={imgUrl} />}
  
      </div>
    );
  };

export default FeedPost