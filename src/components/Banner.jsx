import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#FFC017] w-full  h-[450px] flex border-b border-black">
      <div className=" w-full md:w-1/2 flex justify-center items-center px-6 md:pl-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-[88px] font-serif"> Stay Curious.</h1>
          <p className="font-sans text-2xl font-light md:font-normal md:text-xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="text-white bg-black rounded-full px-6 py-2 mt-2">
            Start Reading
          </button>
        </div>
      </div>
      {/* <AnimationM /> */}
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





  return (
    <div className="w-1/2 relative min-h-full">
      {Array.from({length:10}, () => Math.floor(Math.random()* 10)).map((val) => <div className={`text-2xl font-bold top-1/${val} right-1/${Math.floor(Math.random()*10)} ease-in duration-100`}>M{val} </div>)}
    </div>
  );
};


