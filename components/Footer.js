export default function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-3 text-center text-darkteal py-8 place-items-center text-xl">
                <p className="font-light hidden sm:block">Avery Chapman</p>

                <div className="flex flex-col gap-4 col-start-2">
                    <h1 className="font-bold">Contact Me</h1>
                    <p className="font-light">averyvchapman@gmail.com</p>
                    <p className="font-light">(484) 678-0892</p>
                    <p className="font-light block sm:hidden">Pittsburgh, PA</p>
                </div>

                <p className="font-light hidden sm:block">Pittsburgh, PA</p>
            </div>
        </footer>
    );
}
