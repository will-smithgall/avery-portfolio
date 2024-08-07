import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("reize", handleResize);
    }, []);

    return screenSize;
};

export default useScreenSize;
