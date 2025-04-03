import React from "react";
import { motion } from "framer-motion";
import college from '../assets/K-S-Rangasamy-College-of-Technology.jpg';
import college1 from '../assets/1696838635slider-1.webp';

const About = () => {
    return (
        <div className="bg-transparent text-white py-20 -mt-36 px-6 md:px-32">
            <h1 className="text-center text-5xl font-bold mb-12 text-blue-400">About Us</h1>

            {/* First Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                {/* Left Text Box */}
                <motion.div
                    className="relative bg-gray-800 p-10 rounded-lg border-l-8 border-blue-400 shadow-xl max-w-2xl h-auto"
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-blue-300 mb-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        K.S.R College of Engineering
                    </motion.h2>
                    <p className="text-gray-300">
                        K.S.R. College of Engineering, Tiruchengode is an autonomous institution that is affiliated with Anna University, Chennai. It was established in 2001 by our Founder and Chairman, Dr. K. S. Rangasamy MJF, under the Aarthi Educational and Charitable Trust. At present, Thiru R. Srinivasan BBM., MISTE, the younger son of our founder and chairman, functions as the chairman and managing trustee of this institution.
                        The college is accredited by NAAC with A++ grade. The college offers 12 B.E., & B.Tech., 10 M.E., & M.Tech., programmes along with M.C.A and MBA programmes. The college also offers 8 Ph.D programmes in Engineering, Science and Computer Application streams. All these courses are approved by AICTE, New Delhi.
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
                    <p className="text-gray-300">
                        The institution has received numerous awards and recognitions for its academic excellence, research contributions, and innovative practices in engineering education. With well-equipped laboratories, advanced research facilities, and experienced faculty, the college strives to provide top-notch education to students.
                    </p>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
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
                        Our Excellence
                    </motion.h2>
                    <p className="text-gray-300">
                        The institution has received numerous awards and recognitions for its academic excellence, research contributions, and innovative practices in engineering education. With well-equipped laboratories, advanced research facilities, and experienced faculty, the college strives to provide top-notch education to students.
                    </p>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                </motion.div>
                <motion.div
                    className="relative w-full md:w-[500px] md:h-[350px] border-8 border-blue-400 rounded-lg shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500"
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
                        Our Excellence
                    </motion.h2>
                    <p className="text-gray-300">
                        The institution has received numerous awards and recognitions for its academic excellence, research contributions, and innovative practices in engineering education. With well-equipped laboratories, advanced research facilities, and experienced faculty, the college strives to provide top-notch education to students.
                    </p>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
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
        </div>
    );
};

export default About;
