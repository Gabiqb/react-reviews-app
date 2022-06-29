import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Person({ props }) {
  const [{ id, name, job, image, text }, nextPerson, prevPerson, randomPerson] =
    props;
  console.log(props);
  return (
    <>
      <div className="flex flex-col rounded items-center h-[28rem]">
        <div className="absolute">
          <img className="img" src={image} />
          <div className="bg-blue-400 rounded-full absolute top-10 left-auto w-10 h-10 grid items-center place-content-center text-white">
            <FaQuoteRight />
          </div>
        </div>
        <h1 className="capitalize font-bold text-xl tracking-wider mt-44">
          {name}
        </h1>
        <h2 className="capitalize text-sm underline font-bold text-blue-400 tracking-wider">
          {job}
        </h2>
        <div>
          <p className=" mt-3 px-4 text-center text-gray-600 h-[8rem]">
            {text}
          </p>
          <div className="mt-5 space-x-5 flex place-content-center">
            <button
              className="text-2xl text-blue-400"
              onClick={() => prevPerson(id)}
            >
              <FaChevronLeft />
            </button>
            <button
              className="text-2xl text-blue-400"
              onClick={() => nextPerson(id)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 rounded-bl-lg rounded-tr-lg px-2 py-0.5 mt-5 text-center tracking-wide text-yellow-50"
            onClick={() => randomPerson()}
          >
            Surprise me
          </button>
        </div>
      </div>
    </>
  );
}
