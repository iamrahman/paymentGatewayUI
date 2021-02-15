import React from 'react';
import Dashboard from '../Containers/Dashboard';
import './index.css';
const App = () => {
    return(
        <div className="flex flex-col items-center justify-center bg-primary w-full h-screen">
            <Dashboard/>
        </div>
    );
}

export default App;