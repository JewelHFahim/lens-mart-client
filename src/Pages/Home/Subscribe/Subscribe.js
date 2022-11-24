import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="hero bg-base-100 mb-10 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="text-lg font-bold text-secondary py-2">Newsletter Area</p>
            <h1 className="text-4xl font-bold mb-6">SUBSCRIBE NEWSLETTER</h1>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-secondary w-full rounded-none"
              />
              <button className="btn btn-secondary border border-l-0 rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
