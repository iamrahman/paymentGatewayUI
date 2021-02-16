import React from 'react';
import './index.css';
import ReactRouter from './router';
const App = () => {
    return(
        <div className="flex flex-col items-center justify-center bg-primary w-full h-screen">
           <ReactRouter/>
        </div>
    );
}

export default App;