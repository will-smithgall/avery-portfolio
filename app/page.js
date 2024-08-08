"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Headshot from "@/public/avery.jpeg";
import ProjectCard from "@/components/home/ProjectCard";

const projectData = [
    { name: "Marketing Pitch", classes: "md:col-span-2 md:col-start-1", url: "/marketing" },
    { name: "Ad Campaigns", classes: "md:col-span-2 md:col-start-3", url: "/ad-campaigns" },
    { name: "Technical Writing", classes: "md:col-span-2 md:col-start-5", url: "technical-writing" },
    { name: "Social Media", classes: "md:col-span-2 md:col-start-2", url: "social-media" },
    { name: "Graphic Design", classes: "md:col-span-2 md:col-start-4", url: "graphic-design" },
];

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Header intro */}

            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 text-graypurple px-5 md:px-20 text-center md:text-left py-16 md:pt-40 md:pb-20 my-auto">
                <div className="md:col-span-7">
                    <h1 className="text-6xl mb-8">Hi, I'm Avery Chapman.</h1>

                    <p className="text-xl mb-8 font-light">
                        I’m a marketing analyst, writer, and linguist who’s been using data and creativity to fine-tune
                        marketing strategies and impactful campaigns.{" "}
                    </p>

                    <button
                        className="bg-lightorange text-darkteal py-4 px-6 rounded-full font-bold mb-8
                            hover:scale-[103%] transition-transform duration-150 ease-in-out hover:shadow-sm"
                        onClick={() => router.push("/resume")}
                    >
                        My Resume & CV
                    </button>
                </div>
                <div className="md:col-span-5 place-self-center">
                    <div className="rounded-full bg-darkteal w-[300px] h-[300px] overflow-hidden">
                        {/* This chunk will probably need to be reworked */}
                        <Image src={Headshot} />
                    </div>
                </div>
            </div>

            {/* About Me */}

            <div className="flex flex-col text-graypurple px-5 md:px-20 gap-8 mb-8">
                <h1 className="text-center text-6xl mb-8">About Me</h1>

                {/* Professional */}

                <div className="flex flex-col sm:flex-row sm:gap-16 items-start">
                    <div className="bg-darkteal rounded-3xl h-64 w-64 hidden sm:block">
                        {/* Image here at some point, just temporary */}
                    </div>

                    <div className="sm:flex-1">
                        <h2 className="mb-4 text-4xl">Professionally</h2>
                        <p className="font-light text-xl mb-8">
                            In 2022 I started as a technical writer at the University of Pittsburgh, creating user
                            manuals and training materials. I eventually started writing white papers and reports as
                            well, leading to data and marketing analysis. I found a love for this work and officially
                            took on the role as marketing analyst in 2023.
                        </p>
                    </div>
                </div>

                {/* Personal */}

                <div className="flex flex-col sm:flex-row sm:gap-16 items-start">
                    <div className="sm:flex-1">
                        <h2 className="mb-4 text-4xl">Personally</h2>
                        <p className="font-light text-xl mb-8">
                            My two biggest passions are words and creating things, so I’m often reading or pursuing my
                            next artistic project. When I’m not doing those, I’m usually exploring outdoors, listening
                            to a niche podcast, or keeping my cat out of trouble.
                        </p>
                    </div>

                    <div className="bg-darkteal rounded-3xl h-64 w-64 hidden sm:block">
                        {/* Eventually an image here, just placeholder */}
                    </div>
                </div>
            </div>

            {/* Projects */}
            {/* TODO: Figure out how to lay this out for the MD breakpoint */}
            <div className="flex flex-col gap-16 text-graypurple">
                <h1 className="text-6xl font-bold text-center">My Work</h1>

                <div className="grid grid-cols-1 md:grid-cols-6 px-5 md:px-20 mb-8 gap-x-4 gap-y-8 md:place-items-center pl-[15%]">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} title={project.name} classes={project.classes} url={project.url} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
