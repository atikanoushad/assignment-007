import React from 'react';


const Count = () => {
    return (
        <div className='mx-10'>
            <div className="container mx-auto mt-15 flex gap-5 ">
      
      <div className="w-[780px] h-[250px] bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-center pt-19  ">
        
          
        
        <div>
          <p className="text-xl text-white">In-Progress</p>
        <h2 className="text-5xl font-bold text-white">0</h2>
        </div>

        
      </div>
      <div className="w-[780px] h-[250px] bg-gradient-to-b from-[#54CF68] to-[#00827A] text-center pt-19 ">
        <p className="text-xl text-white">Resolved</p>
        <h2 className="text-5xl font-bold text-white">0</h2>
      </div>
    </div>
        </div>
    );
};

export default Count;