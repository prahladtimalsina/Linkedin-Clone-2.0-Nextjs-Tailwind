import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  VideoCameraIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
function Home({ providers }) {
 
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>Linkedin-2.0</title>
        <meta name="description" content="Linkedin login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-around items-center space-y-3 ">
        <div className="relative w-36 h-10  ">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={HomeIcon} title="Discover" />
            <HeaderLink Icon={UserGroupIcon} title="People" />
            <HeaderLink Icon={VideoCameraIcon} title="Learning" />
            <HeaderLink Icon={BriefcaseIcon} title="Jobs" />
          </div>
          

          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold 
                border border-blue-700 px-5 py-1.5 transition hover:border-2
                rounded-full"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-2xl md:text-4xl text-amber-800/80 max-w-xl  !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowRightIcon className="h-5 w-5 text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowRightIcon className="h-5 w-5 text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new Skill</h2>
              <ArrowRightIcon className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
