import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo"
export default function Navlink() {
    return (
        <nav>

            <Logo />

            <div>
                <NavLink to='/'>Home Page</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/posts-page'>Posts Page</NavLink>
            </div>

        </nav>
    )
}