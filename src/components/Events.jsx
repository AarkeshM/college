import React from "react";



const Events = () => {
    return (
        

            <div className="py-20 px-6 bg-transparent">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-300 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center animate-bounce">Events</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Debugging Challenge</h3>
                        <p className="text-gray-300">Show your coding skills and win prizes!</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">GENAI Hackathon</h3>
                        <p className="text-gray-300">Build AI projects and innovate!</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">Hackathon</h3>
                        <p className="text-gray-300">Crack the code..!</p>
                    </div>



                </div>
            </div>
        
    );
};

export default Events;
