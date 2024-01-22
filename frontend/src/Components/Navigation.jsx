import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="pb-5 mb-5 border-b">
            <ul className="flex justify-end space-x-5">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}
