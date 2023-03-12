import React from "react";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const Cardprofile = () => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
      <figure className="p-5 rounded-none ">
        <img
          src="https://source.unsplash.com/random/800x800/?person=1"
          alt="creator"
          className=""
        />
      </figure>
      <div className="px-5">
        <h2 className="card-title">Serena William</h2>
        <p>@serenawill</p>
        <div className="card-actions justify-end m-3">
          <button className="btn btn-square btn-sm">
            <FiArrowUpRight />
          </button>
          <button className="btn btn-square btn-sm">
            <FiStar />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardprofile;
