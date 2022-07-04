import Button from "./Button/Button";
import React from "react";
function Layout() {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="flex justify-between items-center mx-auto py-5">
          <div>Dojo Finance</div>
          <div>
            <ul className="flex">
              <li className="px-2 mx-3">Overview</li>
              <li className="px-2 mx-3">About</li>
              <li className="px-2 mx-3">Support</li>
            </ul>
          </div>
          <div>
            <Button linearGradient className="w-[200px]">
              Download
            </Button>
          </div>
        </div>
        {/* SECTION 1 START */}
        <div className="mx-auto flex items-center justify-between">
          <div className="">
            <h1 className="text-6xl font-bold  leading-[80px] mb-7">
              Next Gen crypto wallet & <br /> the best blockchain <br /> gateway
              apps
            </h1>
            <Button className="px-8 w-[200px]" linearGradient>
              Download Now
            </Button>
          </div>
          <div className="w-[300px] h-[600px] bg-gray-600 "></div>
        </div>
        {/* SECTION 2 START */}
        <div className="py-24 px-16 bg-[#262B3182] rounded-[50px]">
          <h1 className="text-center text-5xl mb-16">
            Everything you need in Dojo <br /> crypto world
          </h1>
          <div className="flex justify-between">
            <div className="w-[48%] h-[550px] bg-blue-600 rounded-3xl flex flex-col justify-between items-center px-10 text-center">
              <h1 className="mt-16 text-4xl">Deposite in a few taps</h1>
              <div className="w-[300px] h-[350px] bg-yellow-400"></div>
            </div>
            <div className="w-[48%] h-[550px] bg-blue-600 rounded-3xl flex flex-col justify-between items-center px-10 text-center">
              <h1 className="mt-16 text-4xl">
                Swap and Receive Crypto at a glance
              </h1>
              <div className="w-[300px] h-[350px] bg-yellow-400"></div>
            </div>
          </div>
          <div className="w-full h-[500px] bg-blue-600 rounded-3xl flex  justify-between items-center px-14 mt-9 ">
            <h1 className="text-4xl w-[50%]">
              A simple, secure way to <br /> swap and send tokens
            </h1>
            <div className="w-[300px] h-[350px] bg-yellow-400"></div>
          </div>
        </div>
        {/* SECTION 3 START */}
        <div className="text-center py-28">
          <h1 className="text-5xl mb-7">Supported Coins</h1>
          <p className="text-[#999999] w-[60%] mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="w-full h-[500px] bg-gray-700 mt-14"></div>
        </div>
        {/* SECTION 4 START */}
        <div className="flex justify-between">
          <div className="w-[30%]">
            <h1 className="text-5xl mb-5 ">Solutions from Dojo wallet</h1>
            <p className="text-[#B5B5B5]">
              Dojo is created with a vision to change the landscape of the
              decentralized finances with the Solana, Near ecosystem.
            </p>
          </div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-[45%] h-[310px] bg-[#141A21] mb-11 flex flex-col justify-center items-center text-center px-6">
              <div className="w-10 h-10 bg-white"></div>
              <h1 className="text-2xl mt-5 mb-4">Lorem ipsum dolor sit.</h1>
              <p className="text-[#A8AFB7]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="w-[45%] h-[310px] bg-[#141A21] mb-11 flex flex-col justify-center items-center text-center px-6">
              <div className="w-10 h-10 bg-white"></div>
              <h1 className="text-2xl mt-5 mb-4">Lorem ipsum dolor sit.</h1>
              <p className="text-[#A8AFB7]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="w-[45%] h-[310px] bg-[#141A21] mb-11 flex flex-col justify-center items-center text-center px-6">
              <div className="w-10 h-10 bg-white"></div>
              <h1 className="text-2xl mt-5 mb-4">Lorem ipsum dolor sit.</h1>
              <p className="text-[#A8AFB7]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="w-[45%] h-[310px] bg-[#141A21] mb-11 flex flex-col justify-center items-center text-center px-6">
              <div className="w-10 h-10 bg-white"></div>
              <h1 className="text-2xl mt-5 mb-4">Lorem ipsum dolor sit.</h1>
              <p className="text-[#A8AFB7]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
