import { Index as Posts } from "../Pages/Posts/Index";

export default function Home() {
    return (
        <div>
            <h1 className="my-5 text-xl font-semibold text-center">
                Welcome to My Blog
            </h1>

            <Posts />
        </div>
    );
}
