import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
function Home() {
  return (
    <div className="">
      <header className="flex justify-around items-center space-y-3 ">
        <div className="relative w-36 h-10 ">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={HomeIcon} title="Discover" />
            <HeaderLink Icon={UserGroupIcon} title="People" />
            <HeaderLink Icon={VideoCameraIcon} title="Learning" />
            <HeaderLink Icon={BriefcaseIcon} title="Jobs" />
          </div>
          <div className="pl-4">
            <button
              className="text-blue-700 font-semibold 
          border border-blue-700 px-5 py-1.5 transition hover:border-2
          rounded-full"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
