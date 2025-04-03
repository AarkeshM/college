import React from "react";



const Events = () => {
    return (
        <div className="bg-transparent text-white py-12 px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>

            <div className="py-20 px-6 bg-transparent">
                <h2 className="text-5xl text-white font-extrabold text-center neon-glow">Events</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="glass-card">
                        <h3 className="text-xl font-bold">Coding Challenge</h3>
                        <p className="text-gray-300">Show your coding skills and win prizes!</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-xl font-bold">AI Hackathon</h3>
                        <p className="text-gray-300">Build AI projects and innovate!</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-xl font-bold">Cyber Security Quiz</h3>
                        <p className="text-gray-300">Test your cybersecurity knowledge.</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Events;
