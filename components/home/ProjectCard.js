"use client";

import { useRouter } from "next/navigation";

export default function ProjectCard({ title, classes, url }) {
    const router = useRouter();
    const allClasses = `${classes} flex items-start gap-4 lg:gap-8 cursor-pointer hover:scale-[103%] transition-transform duration-150 ease-in-out hover:shadow-sm"`;

    const handleClick = () => {
        router.push(url);
    };

    return (
        <div className={allClasses} onClick={() => handleClick(url)}>
            <div className="bg-darkteal rounded-3xl h-16 w-16">{/* Image here at some point, just temporary */}</div>
            <p className="self-center text-xl flex-1">{title}</p>
        </div>
    );
}
