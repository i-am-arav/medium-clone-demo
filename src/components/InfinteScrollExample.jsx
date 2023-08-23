import React from 'react'

const InfiniteScrollExample = () => {
  //demo infinite Scroll
  const [state, setState] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = () => {
    try {
        setIsLoading(true);
        setTimeout(() => {
            setState((prev) => [...prev, ...prev]);
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex-auto h-auto md:w-[728px] border border-black'>InfiniteScrollExample
        {state.map((e) => <div className='my-10'>{e}</div>)}
        {isLoading && <span className='w-8'>Loading...</span>}
    </div>
  )
}

export default InfiniteScrollExample