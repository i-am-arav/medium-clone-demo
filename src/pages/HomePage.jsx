import React, { useState } from 'react'
import HomeFeedPosts from '../components/HomeFeedPosts'
import homeFeedPost from '../tempUtils/homeFeedPost'
import  { fetchPost } from '../client';

const HomePage = () => {

  const [posts, setPosts ] = useState(homeFeedPost);
  const [postData,setPostData] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchSanityData = async () => {
    const res = await fetchPost();
    setPostData(res);
    console.log('res',res)
  }

  React.useEffect(() => {
    console.log('PostData', postData)
  }, [postData])

  const fetchData = () => {
    try {
        setIsLoading(true);
        setTimeout(() => {
          setPosts((prev) => [...prev, ...prev]);
            setIsLoading(false);
        },3000)
        
    }
    catch(e) {
      console.log('error')
      setIsLoading(false);
  }

}

const handleScroll = () => {
  console.log('innerHeight',window.innerHeight);
  console.log('scrollTop',document.documentElement.scrollTop);
  console.log('offsetHeight', document.documentElement.offsetHeight);

  console.log('currentHeight', window.innerHeight + document.documentElement.scrollTop +1)
  if ((window.innerHeight + document.documentElement.scrollTop + 1) === document.documentElement.offsetHeight || isLoading) {
    fetchData();
  }
  return
};

React.useEffect(() => {
  fetchSanityData();
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className='flex flex-col'>
      {/* Navbar */}
      <div></div>

      <div className='flex px-20'>
      <div className='flex-auto min-h-screen md:w-[728px] border border-black overflow-y-scroll'>
        <HomeFeedPosts posts={posts} />
      </div>
      <div className='pl-10 pt-10 pr-6 border border-gray-500 overscroll-none'>

      </div>

      </div>
      

    </div>
    
  )
}

export default HomePage