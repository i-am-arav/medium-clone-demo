import React, { useState } from "react";
import HomeFeedPosts from "../components/HomeFeedPosts";
import homeFeedPost from "../tempUtils/homeFeedPost";
import { fetchPost } from "../client";
import FeedPost from "../components/FeedPost";
import Header from "../components/Header";

const tabs = ["+", "For You", "Trending"];

const HomePage = () => {
  const [posts, setPosts] = useState(homeFeedPost);
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("For You");

  const fetchSanityData = async () => {
    const res = await fetchPost();
    setPostData(res);
  };

  React.useEffect(() => {
    console.log("PostData", postData);
  }, [postData]);

  const fetchData = () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setPosts((prev) => [...prev, ...prev]);
        setIsLoading(false);
      }, 3000);
    } catch (e) {
      console.log("error");
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    console.log("innerHeight", window.innerHeight);
    console.log("scrollTop", document.documentElement.scrollTop);
    console.log("offsetHeight", document.documentElement.offsetHeight);

    console.log(
      "currentHeight",
      window.innerHeight + document.documentElement.scrollTop + 1
    );
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 ===
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      fetchData();
    }
    return;
  };

  React.useEffect(() => {
    fetchSanityData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="w-full py-4 px-8 flex ">
      <img src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'  className='h-10 w-20'/>
      </div>
      <div className="grid grid-cols-12 overflow-y-scroll">
        <div className="col-span-12 md:col-start-2 md:col-span-7 md:border-r md:border-gray-200">
          <ul className="flex flex-wrap text-sm text-center text-gray-700 border-b border-gray-200 pt-4">
            {tabs.map((tab) => (
              <li onClick={() => setActiveTab(tab)}>
                <a className={`inline-block p-4 text-gray-500 ${tab === activeTab && "border-b border-gray-700"} cursor-pointer ease-out duration-300 hover:text-black`}>
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <HomeFeedPosts posts={posts} />
        </div>
        <div className="overscroll-none  min-h-screen text-black col-span-4 ">
          <div className="flex flex-col px-8 pt-8">
            {/*Staff Picks*/}
            <p className="text-xl">Staff Picks</p>
            {[{username:'Jude Ellison', title:'The "Male Loneliness Epidemic" Does Not Exist', imgUrl: '' }, {username:'Thomas Smith',domain:'DIY Life Tech', title:'Something Must Be Done About LED Bulbs', imgUrl:''}].map(({imgUrl, title, domain, username, }) => (<FeedPost className={'mt-2'} imgUrl={imgUrl} postTitle={title} domain={domain} name={username} />))}
            
            <p className="text-green-600  text-sm cursor-pointer mt-2"> See the Full List</p>

            {/*Writing on Medium */}
            <div className="bg-blue-200 p-10 mt-10 rounded-md">
              <div className="flex justify-between">
                <p className="font-bold">Writing on Medium</p>
                <p className="-mt-8 -mr-6 text-gray-500">X</p>
              </div>
              <div className="flex flex-col space-y-2 mt-6">
                <p>New Writer FAQ</p>
                <p>Expert writing advice</p>
                <p>Grow Your readership</p>

              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full w-fit mt-6 -ml-2">Start Writing</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
