"use client";
import Link from "next/link"
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}
export function FeaturedCourses(){

    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

    return(
        <div className="py-12  bg-gray-900">
            <div className="text-center pt-4 mt-4">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
            <div className="mt-16 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course:Course)=> (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col overflow-hidden h-full max-w-lg">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow mb-1">
                                    <Image
                                        unoptimized
                                        alt="music image"
                                        src={course.image}
                                        height="80"
                                        width="80"
                                        className="object-contain mb-1 mt-2"
                                    />
                                    <h2 className="text-lg sm:text-x font-bold mt-4 mb-2 dark:text-neutral-200">{course.title}</h2>
                                    <p className="text-sm text-white flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="bg-white/20 px-4 text-white p-2 rounded-md mt-4">
                                      Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                      className="p-4 rounded border border-neutral-200 text-neutral-200 hover:bg-gray-300 hover:text-slate-800 ransition duration-200" >
                    View All courses
                </Link>
            </div>
        </div>
    )
}