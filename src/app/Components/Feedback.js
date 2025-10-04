"use client";
import { useState, useEffect } from "react";

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      username: "Abhisek",
      text: "Great service! The work was delivered on time and exceeded my expectations.",
      rating: 5,
      dp: "😊",
    },
    {
      username: "Heena Pathaan",
      text: "Awesome design with high technology! My website is super fast and user-friendly.",
      rating: 4,
      dp: "👍",
    },
    {
      username: "Jeet Singh",
      text: "Good communication throughout the project. Got my website at an affordable price!",
      rating: 4,
      dp: "💬",
    },
    {
      username: "Dheeraj Yadav",
      text: "Highly recommend! The team is very professional and skilled in React.js & Next.js.",
      rating: 5,
      dp: "🔥",
    },
    {
      username: "Shivam Patel",
      text: "Very professional. They provide high-tech development services at great prices.",
      rating: 5,
      dp: "✨",
    },
  ]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="navbar   w-full py-10  font-poppins overflow-hidden">
      <h2 className="text-3xl font-bold  text-white text-center mb-6">
        What Our Clients Say
      </h2>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[300px] p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl">{feedback.dp}</span>
                <p className="font-bold text-purple-900 text-lg">
                  {feedback.username}
                </p>
              </div>
              <p className="text-black font-semibold mb-2 line-clamp-3 break-words whitespace-normal">
                {feedback.text}
              </p>
              <div>{renderStars(feedback.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styling */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scrollRightLeft 15s linear infinite;
        }
        @keyframes scrollRightLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default FeedbackComponent;
