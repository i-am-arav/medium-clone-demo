import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#ffd633] w-full  h-[450px] flex">
      <div className=" w-full md:w-1/2 flex justify-center items-center pl-10 space-y-5">
        <div className="space-y-8">
          <h1 className="text-7xl font-serif"> Stay Curious.</h1>
          <p className="font-serif text-xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="text-white bg-black rounded-full px-6 py-2 mt-2">
            Start Reading
          </button>
        </div>
      </div>
      <AnimationM />
    </div>
  );
};

export default Banner;



const AnimationM = () => {
  const positions = [
    { x: "left-1/4", y: "top-1/4" },
    { x: "left-1/2", y: "top-1/2" },
    { x: "left-3/4", y: "top-3/4" },
    { x: "left-2/4", y: "top-3/4" },
    { x: "right-2/2", y: "bottom-1/2" },
    { x: "right-3/4", y: "top-3/4" }
  ];

  const [position, setPosition] = React.useState(
    positions[Math.floor(Math.random() * positions.length)]
  );

  const [positionStates, setPositions] =  React.useState([positions[Math.floor(Math.random() * positions.length)],positions[Math.floor(Math.random() * positions.length)] ]);
  const [hideM, setHideM] = React.useState(false);



  const updatePosition = () => {
    const randomPosition = Math.random() * positions.length;
    console.log('randomPosition', randomPosition)
    const intRandom = Math.floor(randomPosition);
    console.log('intRandom', intRandom)

    setPosition(positions[intRandom]);
  };

  const updateHideM = () => {
    setHideM(true);
  };

  React.useEffect(() => {
    const interval = setInterval(updatePosition, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    setHideM(false);
    const interval = setTimeout(updateHideM, 1200); 
    return () => clearTimeout(interval);
  }, [position]);

  return (
    <div className="hidden md:block w-1/2 min-h-full">
      <div
        className={`${hideM ? 'hidden' : ''}relative text-2xl font-bold ${position.x || 'top-1/2'} ${position.y || 'right-1/2'} ease-in duration-100`}
      >
        M
      </div>
    </div>
  );
};


