import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

const LifeExpectancyAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);

  // Halland data by time period
  const fullData = [
    { period: "1966-1970", women: 77.7, men: 73.2 },
    { period: "1971-1975", women: 78.4, men: 73.5 },
    { period: "1976-1980", women: 79.5, men: 73.6 },
    { period: "1981-1985", women: 80.3, men: 74.8 },
    { period: "1986-1990", women: 81.5, men: 76.0 },
    { period: "1991-1995", women: 82.1, men: 76.9 },
    { period: "1996-2000", women: 82.7, men: 77.8 },
    { period: "2001-2005", women: 83.4, men: 79.1 },
    { period: "2006-2010", women: 84.2, men: 80.2 },
    { period: "2011-2015", women: 84.7, men: 80.9 },
    { period: "2016-2020", women: 85.1, men: 82.1 },
    { period: "2017-2021", women: 85.4, men: 82.2 },
    { period: "2018-2022", women: 85.5, men: 82.4 },
    { period: "2019-2023", women: 85.5, men: 82.5 },
    { period: "2020-2024", women: 85.6, men: 82.6 }
  ];

  // Reference lines - Blue Zones and US averages
  const referenceLines = {
    blueZonesWomen: 85.8,
    blueZonesMen: 81.5,
    usWomen: 80.5,
    usMen: 75.1
  };

  // Animation data - slice the data up to the current index
  const getAnimatedData = () => fullData.slice(0, currentIndex + 1);

  // Handle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle reset
  const resetAnimation = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  // Handle animation speed change
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseInt(e.target.value));
  };

  // Animation effect
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isPlaying && currentIndex < fullData.length - 1) {
      timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, speed);
    } else if (isPlaying && currentIndex >= fullData.length - 1) {
      setIsPlaying(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPlaying, currentIndex, fullData.length, speed]);

  return (
    // Removed the outer relative div and the absolute background image div
    // The component itself should be placed within a container that has the desired background
    <div className="flex flex-col items-center w-full p-4 text-white"> {/* Set default text to white */}
        <h2 className="text-2xl font-bold mb-4">Life Expectancy in Halland (1966-2024)</h2> {/* Removed text-black */}
        <p className="mb-4">Compared to Blue Zones and US Averages</p> {/* Removed text-gray-800 */}
        
        {/* Removed background class from chart container */}
        <div className="w-full h-80 mb-6 rounded-lg p-2"> 
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={getAnimatedData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* Lighter grid, horizontal lines removed */}
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" horizontal={false} vertical={false}/> 
              {/* White axes */}
              <XAxis dataKey="period" stroke="#FFFFFF" /> 
              <YAxis domain={[70, 90]} stroke="#FFFFFF" /> 
              {/* Darker tooltip */}
              <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', border: 'none' }} itemStyle={{ color: '#FFFFFF' }} labelStyle={{ color: '#FFFFFF' }}/> 
              {/* Darker legend background */}
              <Legend wrapperStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '5px', padding: '5px' }} /> 
              
              {/* Halland data - Brighter Colors */}
              <Line 
                type="monotone" 
                dataKey="women" 
                name="Halland Women" 
                stroke="#FFD700" /* Gold/Yellow */
                strokeWidth={3} 
                dot={{ r: 4, fill: "#FFD700" }} 
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="monotone" 
                dataKey="men" 
                name="Halland Men" 
                stroke="#00FFFF" /* Cyan/Aqua */
                strokeWidth={3} 
                dot={{ r: 4, fill: "#00FFFF" }} 
                activeDot={{ r: 6 }} 
              />
              
              {/* Reference lines - Brighter/Distinct Colors */}
              <ReferenceLine 
                y={referenceLines.blueZonesWomen} 
                stroke="#FFA500" /* Orange */
                strokeDasharray="3 3" 
                /* Removed label prop */
              />
              <ReferenceLine 
                y={referenceLines.blueZonesMen} 
                stroke="#32CD32" /* Lime Green */
                strokeDasharray="3 3" 
                /* Removed label prop */
              />
              <ReferenceLine 
                y={referenceLines.usWomen} 
                stroke="#D3D3D3" /* Light Gray */
                strokeDasharray="3 3" 
                /* Removed label prop */
              />
              <ReferenceLine 
                y={referenceLines.usMen} 
                stroke="#A9A9A9" /* Dark Gray */
                strokeDasharray="3 3" 
                /* Removed label prop */
              />

              {/* Dummy Lines for Legend */}
              <Line dataKey="dummyBZWomen" name="BZ Women" stroke="#FFA500" strokeWidth={0} dot={false} activeDot={false} legendType="line" />
              <Line dataKey="dummyBZMen" name="BZ Men" stroke="#32CD32" strokeWidth={0} dot={false} activeDot={false} legendType="line" />
              <Line dataKey="dummyUSWomen" name="US Women" stroke="#D3D3D3" strokeWidth={0} dot={false} activeDot={false} legendType="line" />
              <Line dataKey="dummyUSMen" name="US Men" stroke="#A9A9A9" strokeWidth={0} dot={false} activeDot={false} legendType="line" />

            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Darker background for controls */}
        <div className="flex items-center justify-center w-full mb-4 bg-black bg-opacity-60 p-3 rounded-lg"> 
          <div className="mr-4">
            <strong>Current Period:</strong> {fullData[currentIndex]?.period || 'Not Started'}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={togglePlay}
              className={`px-4 py-2 rounded ${isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={resetAnimation}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Reset
            </button>
          </div>
        </div>
        
        {/* Darker background for speed control */}
        <div className="w-full max-w-md bg-black bg-opacity-60 p-3 rounded-lg"> 
          <label htmlFor="speed" className="block mb-2">Animation Speed (ms):</label>
          <input 
            type="range" 
            id="speed"
            min="200"
            max="2000"
            step="100"
            value={speed}
            onChange={handleSpeedChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>Fast</span>
            <span>Slow</span>
          </div>
        </div>
        
        {/* Darker background for observations */}
        <div className="mt-6 p-4 bg-black bg-opacity-60 rounded-lg w-full max-w-2xl"> 
          <h3 className="font-bold mb-2">Key Observations:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Halland women (latest: {fullData[fullData.length-1].women} years) are slightly <strong>below</strong> Blue Zones women ({referenceLines.blueZonesWomen} years) but well above US women ({referenceLines.usWomen} years)</li>
            <li>Halland men (latest: {fullData[fullData.length-1].men} years) have surpassed Blue Zones men ({referenceLines.blueZonesMen} years) in recent years</li>
            <li>The gender gap in Halland has narrowed over time from {(fullData[0].women - fullData[0].men).toFixed(1)} years to {(fullData[fullData.length-1].women - fullData[fullData.length-1].men).toFixed(1)} years</li>
            <li>Both Halland men and women consistently outperform US life expectancy</li>
          </ul>
        </div>
      </div>
  );
};

export default LifeExpectancyAnimation;
