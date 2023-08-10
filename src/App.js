import Header from './components/Header'
import Banner from './components/Banner';
import TrendingPost from './components/TrendingPost';
import HomeFeedPosts from './components/HomeFeedPosts';
import Pill from './components/Pill';

const tags =["Saab", "Volvo", "BMW", "Programming", "Social media", "Marketing", "Coding"]

function App() {
  return (
    <div className='m-0 p-0'>
    <Header />
    <Banner/>
    <TrendingPost />

    <div className='grid grid-cols-1 md:grid-cols-6 border-black border-2'>
      <div className='md:col-span-2 md:col-start-5 border-2 border-red-500'>
      <div>Discover more of what matters to you</div>
      <div className='flex space-x-4 flex-wrap'>
      {tags.map((val,idx) => <Pill text={val} textSize='base' />)}
      </div>
      </div>
      <div className='md:col-span-4 md:col-start-1 border-gray-400 border-2'><HomeFeedPosts /></div>

    </div>
    </div>

  );
}

export default App;
