import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';

import { ToastContainer } from 'react-toastify';

function Home() {
  
  
  return (
    <div class="pt-2 mt-2"
    style={{
      backgroundImage: `url(/bg.png)`, // background image from public folder
      backgroundSize: 'cover', // Ensures the image covers the full container
      backgroundPosition: 'center', // Centers the background image
      width: '100%', // Ensures full width of the container
      marginTop:2,
      paddingTop:2,


      minHeight: '140vh', // Ensures full height of the screen
    }}
  >
      <div
        className=" p-6 max-w-md pl-16 pt-[180px]"
        style={{ zIndex: 10 }}
      >
       



        <div mt-8>
        <img src="logo.png" alt="Logo" height="200" width="300" />
        <p>"For any queries, please contact us at arif@gmail.com."</p>
       
       
      </div>

      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
