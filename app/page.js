import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-white px-5 text-center md:text-left md:px-20 py-16 my-auto">
                <div className="md:col-span-7">
                    <h1 className="text-6xl mb-6">Text here</h1>
                    <p className="text-lg mb-8 md:mb-0">This should be a brief intro!</p>
                </div>
                <div className="md:col-span-5 place-self-center">
                    <div className="rounded-full bg-darkteal w-[300px] h-[300px]">
                        {/* <Image className="border-black" src={Headshot} width={300} height={300} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
