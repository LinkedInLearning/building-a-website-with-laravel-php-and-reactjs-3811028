import { Link, useLocation } from "react-router-dom";

export default function Show() {
    let location = useLocation();

    return (
        <div>
            <div className="flex flex-col space-y-10">
                <h1 className="mx-auto text-xl">{location.state.title}</h1>

                <h2>
                    By
                    <span className="font-bold"> {location.state.author}</span>
                </h2>

                <div className="leading-7 text-left">{location.state.body}</div>
            </div>

            <Link
                to="/"
                className="inline-block px-4 py-2 mt-10 text-black border rounded-md hover:bg-gray-200"
            >
                Go back
            </Link>
        </div>
    );
}
