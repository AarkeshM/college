import React from "react";

const events = [
  {
    title: "🔍 GLITCH.EXE (Debugging)",
    color: "border-lime-400",
    buttonColor: "bg-lime-400 hover:bg-lime-500",
    link: "https://forms.gle/debugging-form-link",
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
    link: "https://forms.gle/hackathon-form-link",
    TimeLimit: "3-4 hours",
    details: [
        "The GenAI Hackathon invites participants to build an AI-powered app, website, or tool using Generative AI models such as ChatGPT, DALL·E, or Whisper. The project must solve a real-world problem or enhance user experience with AI integration.",
        "Participants must choose a domain-specific topic like Health, Business, Studies, Sports, or Games & Entertainment, and create a solution that demonstrates practical use of Generative AI in that domain.",
        "The submission should include actual interactions or conversations with the AI, showcasing how prompts and outputs were effectively used in the development process.",
        "Projects will be judged on creativity, technical execution, problem relevance, and innovation. Bonus points will be awarded for clean UI/UX, impactful solutions, and optimal AI usage."
      ],
  },
  {
    title: "🤖 PROMPTOPIA (GenAI)",
    description: "Explore the future of AI with practical tasks.",
    color: "border-pink-400",
    buttonColor: "bg-pink-400 hover:bg-pink-500",
    link: "https://forms.gle/genai-form-link",
    TimeLimit: "3 hours",
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
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-slate-300 px-5 md:px-20 py-24">
      <h2 className="text-5xl font-extrabold text-center mb-14 text-white animate-fade-in-down">
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
              <ul className="list-disc list-inside font-serif text-base text-gray-200 space-y-2">
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
