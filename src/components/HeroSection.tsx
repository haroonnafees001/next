import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import Image from "next/image";

function HeroSection() {
  return (
   
        <div className="h-[60rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
            <div className=" p-4 max-w-7xl text-center mx-auto relative z-10 text-center justify-center w-full lg:pt-20 pt-0">
            <Image
                                    unoptimized
                                    alt="music image"
                                    src="https://cdn-icons-png.flaticon.com/512/8019/8019048.png"
                                    height="300"
                                    width="300"
                                    className="object-contain mx-auto md:mt-20 mb-10 min-[320px]:w-[12rem] lg:w-[20rem]"
                                />
        <h1 className="mt-20 mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum libero natus perferendis quam! Aliquam cupiditate enim odit possimus veritatis. Adipisci animi eveniet excepturi maxime odio omnis quae rem suscipit voluptatem?
        </p>
        <div className="mt-10">
            <Link href={'/courses'} className="text-white">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                Explore Courses
                </Button>
            </Link>
        </div>

        </div>

        </div>
  )
}

export default HeroSection