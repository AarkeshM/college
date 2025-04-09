import React from "react";
import { motion } from "framer-motion";
import college from '../assets/K-S-Rangasamy-College-of-Technology.jpg';
import college1 from '../assets/1696838635slider-1.webp';
import titans from "../assets/ChatGPT Image Apr 9, 2025, 10_08_21 AM-Photoroom.png"
import crushers from "../assets/ChatGPT Image Apr 9, 2025, 10_41_29 AM.png"

const About = () => {
    return (
        <div className="bg-transparent text-white py-20 px-6 md:px-40 mt-0 md:-mt-[200px]">

            <h1 className="text-center text-5xl font-orbitron mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#bd7ce8] via-[#b689eb] to-[#6965ad]">About Us</h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                
                <motion.div
                    className="relative bg-[#1c0129] p-10 rounded-lg border-l-8 border-blue-400 shadow-xl max-w-2xl h-auto"
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-[#b5179e]  mb-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        K.S.R College of Engineering
                    </motion.h2>
                    <p className="text-[#fdfcfe]"style={{ textAlign: "justify" }}>
                        K.S.R. College of Engineering, Tiruchengode is an autonomous institution that is affiliated with Anna University, Chennai. It was established in 2001 by our Founder and Chairman, Dr. K. S. Rangasamy MJF, under the Aarthi Educational and Charitable Trust. At present, Thiru R. Srinivasan BBM., MISTE, the younger son of our founder and chairman, functions as the chairman and managing trustee of this institution.
                        The college is accredited by NAAC with A++ grade. The college offers 11 B.E., & B.Tech., 10 M.E., & M.Tech., programmes along with M.C.A and MBA programmes. The college also offers 8 Ph.D programmes in Engineering, Science and Computer Application streams. All these courses are approved by AICTE, New Delhi.
                    </p>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                </motion.div>

                <motion.div
                    className="relative w-full md:w-[500px] md:h-[350px] border-10 rounded-lg shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={college1}
                        alt="College"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-12">

                <motion.div
                    className="relative bg-gray-800 p-10 rounded-lg border-l-8 border-blue-400 shadow-xl max-w-2xl h-auto"
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-blue-300 mb-3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Our Excellence
                    </motion.h2>
                    <p className="text-gray-300"  style={{ textAlign: "justify" }}>
                        The institution has received numerous awards and recognitions for its academic excellence, research contributions, and innovative practices in engineering education. With well-equipped laboratories, advanced research facilities, and experienced faculty, the college strives to provide top-notch education to students.
                    </p>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                </motion.div>


                <motion.div
                    className="relative w-full md:w-[500px] md:h-[350px] border-10 rounded-lg shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={college}
                        alt="College"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                <motion.div
                    className="relative bg-gray-800 p-10 rounded-lg border-l-8 border-blue-400 shadow-xl max-w-2xl h-auto"
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-blue-300 mb-3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Our Club Tech Titans
                    </motion.h2>
                    <p className="text-gray-300"  style={{ textAlign: "justify" }}>
                    Tech-Titans, the vibrant tech club of the Department of Computer Science and Engineering, empowers students to transform their passion for technology into real-world impact. Through workshops, hackathons, coding sessions, and mentorship, members explore fields like AI, data science, cybersecurity, and more. Whether you're a beginner or an experienced coder, Tech-Titans fosters innovation, collaboration, and growth, serving as a launch pad for future tech leaders. Join us to learn, innovate, and shape a better future through technology!
                    </p>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                </motion.div>
                <motion.div
                    className="relative w-full md:w-[420px] md:h-[270px] border-10 rounded-lg shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src = {titans}
                        alt="College"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <motion.div
                    className="relative bg-gray-800 p-10 rounded-lg border-l-8 border-blue-400 shadow-xl max-w-2xl h-auto"
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-blue-300 mb-3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Our club Code Crushers
                    </motion.h2>
                    <p className="text-gray-300"  style={{ textAlign: "justify" }}>
                    Code-Crushers is the innovative club of the Department of Computer Science and Engineering at KSR College of Engineering, focusing on cultivating creativity, leadership, and project execution skills. Our mission is to inspire students to think big and lead the way in organizing exciting tech events, such as hackathons, ideations, and coding marathons. Code-Crushers offers a space for students to experiment, bring fresh ideas to life, and develop strategic planning and event management abilities. Driven by innovation, this club empowers members to push boundaries, shape unique experiences, and make a lasting impact. If you’re passionate about creating, leading, and inspiring, Code-Crushers is where your journey begins!
                    </p>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                </motion.div>

                <motion.div
                    className="relative w-full md:w-[500px] md:h-[350px] border-10 rounded-lg shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={crushers}
                        alt="College"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
