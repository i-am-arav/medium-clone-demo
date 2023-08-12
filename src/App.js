import Header from './components/Header'
import Banner from './components/Banner';
import TrendingPost from './components/TrendingPost';
import HomeFeedPosts from './components/HomeFeedPosts';
import Pill from './components/Pill';
import Footer from './components/Footer';
import WebFooter from './components/WebFooter';

const tags =["Programming", "Technology", "Data Science", "Artifical Intelligence", "Social media", "Marketing", "Productivity"]

function App() {
  return (
    <div className='m-0 p-0 w-full'>
    <Header />
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
    <Footer />
    </div>

  );
}

export default App;
