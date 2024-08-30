import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Work</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create Your Account and Kickstart Your Career!

Join our community of job seekers and take the first step toward landing your dream job. By creating an account, you'll gain access to personalized job recommendations, easy application processes, and resources to help you succeed.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Discover Your Next Career Opportunity

Looking for a job that fits your skills and aspirations? Our platform makes it easy to explore a wide range of opportunities tailored to your experience and goals.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Take the First Step Toward Your Next Opportunity

Ready to advance your career? Our platform makes it easy for you to apply for jobs that align with your skills and career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
