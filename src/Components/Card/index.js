import React from 'react';

const Card = ({}) => {
    return (
        <div className="flex flex items-center justify-center h-full -mt-4">
            <div className="w-full h-48 card rounded-md shadow-xl p-2">
                <p className="flex text-white flex-row-reverse bold">Debit Card</p>
                <div className="w-8 h-6 mt-6" style={{backgroundColor:"#FFD700"}}>
                    -|-|-
                </div>
                <p className="flex text-white font-mono text-xl mt-6">8769 6546 7650 1244</p>
                <div className="flex text-white font-mono items -end">
                    <p>12/23</p>
                </div>
                <p className="flex text-white font-mono">INAMUR RAHMAN</p>
            </div>
        </div>
    )
}

export default Card;