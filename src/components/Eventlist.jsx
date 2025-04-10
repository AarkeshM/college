import React from "react";

const events = [
  {
    title: "🔍 GLITCH.EXE (Debugging)",
    color: "border-lime-400",
    buttonColor: "bg-lime-400 hover:bg-lime-500",
    link: "https://forms.gle/HLk8GxvgYE5rr8oe9",
    TimeLimit: "3 hours",
    details: [
      "The Debugging event challenges participants to identify and correct intentional errors in code snippets designed to simulate real-world programming bugs. This event emphasizes logical reasoning, problem-solving, and code optimization across languages like C, Java, and Python.",
      "Each bug will test the participant’s ability to quickly analyze faulty code, understand the root cause, and apply accurate corrections under time pressure. The event is structured to mimic industry-level debugging scenarios, making it ideal for students aiming to enhance their error-handling and analytical capabilities.",
      "Participants must demonstrate not just correctness, but also efficiency and clarity in their fixes. Bonus opportunities may be offered for clean, optimal solutions and fastest correct submissions.",
      "This is the perfect platform to sharpen your skills, boost confidence in tackling errors, and experience the thrill of real-time problem-solving."
    ],
  },
  {
    title: "💻 HACKOVERDRIVE (Hackathon)",
    color: "border-cyan-400",
    buttonColor: "bg-blue-400 hover:bg-blue-500",
    link: "https://forms.gle/vVkubkAV3Wsg4aTg8",
    TimeLimit: "3 hours",
    details: [
        "Form a team of 1 to 3 members. Use any programming language you're comfortable with.",
        "There are 2 rounds – an easy round (1 hour) followed by a tougher round (2 hours), totaling 3 hours.",
        "Ensure your code is functional and original. AI tools can be used within limits, but copying source code is strictly not allowed.",
        "Your solution will be judged based on creativity, innovation, problem-solving approach, and how well the code works."
      ],
  },
  {
    title: "🤖 PROMPTOPIA (GenAI)",
    description: "Explore the future of AI with practical tasks.",
    color: "border-pink-400",
    buttonColor: "bg-pink-400 hover:bg-pink-500",
    link: "https://forms.gle/kQ7oFGn7B6Qp3CVFA",
    TimeLimit: "5 hours",
    details: [
        "The GenAI Hackathon invites participants to build an AI-powered app, website, or tool using Generative AI models such as ChatGPT, DALL·E, or Whisper. The project must solve a real-world problem or enhance user experience with AI integration.",
        "Participants must choose a domain-specific topic like Health, Business, Studies, Sports, or Games & Entertainment, and create a solution that demonstrates practical use of Generative AI in that domain.",
        "The submission should include actual interactions or conversations with the AI, showcasing how prompts and outputs were effectively used in the development process.",
        "Projects will be judged on creativity, technical execution, problem relevance, and innovation. Bonus points will be awarded for clean UI/UX, impactful solutions, and optimal AI usage."
      ], 
  },
];

const EventListPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#2d0051]  px-5 md:px-20 py-24">
      <h2 className="text-5xl font-extrabold font-serif text-center mb-14  bg-gradient-to-r from-violet-700 via-rose-500 to-pink-600 bg-clip-text text-transparent animate-fadeInUp">
        All Events
      </h2>

      <div className="space-y-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`border-l-8 ${event.color} bg-white/20 backdrop-blur-md rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:bg-white/30`}
          >
            <h3 className="text-2xl font-bold font-serif text-white mb-2">{event.title}</h3>
            {event.TimeLimit && (
              <p className="text-gray-200 text-xl font-serif mb-4">⏰Time Duration: {event.TimeLimit}</p>
            )}

            {event.details.length > 0 && (
              <ul className="list-disc list-inside font-serif text-base text-gray-200 space-y-2"  style={{ textAlign: "justify" }}>
                {event.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <button
                className={`mt-4 ${event.buttonColor} text-white px-5 py-2 rounded-full transition-all`}
              >
                Register
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventListPage;
