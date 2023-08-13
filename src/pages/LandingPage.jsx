import React from 'react';
import Banner from '../components/Banner';
import TrendingPost from '../components/TrendingPost';
import Pill from '../components/Pill';
import WebFooter from '../components/WebFooter';
import HomeFeedPosts from '../components/HomeFeedPosts';
import Footer from '../components/Footer';

const tags =["Programming", "Technology", "Data Science", "Artifical Intelligence", "Social media", "Marketing", "Productivity"]


const LandingPage = () => {
  return (
    <>
    <Banner/>
    <TrendingPost />

    <div className='grid grid-cols-1 md:grid-cols-12 mx-6 md:mx-16'>
      <div className='md:col-span-4 md:col-start-9 py-4'>
      <div className=''>Discover more of what matters to you</div>
      <div className='flex flex-wrap pt-4'>
      {tags.map((val,idx) => <Pill text={val} className='mb-[10px] mr-2' />)}
      </div>
      <WebFooter />
      </div>
      <div className='md:col-span-7 md:col-start-1 md:row-start-1'><HomeFeedPosts /></div>

    </div>
    <Footer /></>
  )
}

export default LandingPage