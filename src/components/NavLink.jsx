import { Link, NavLink } from "react-router-dom";

export default function Navlink() {
    return (
        <nav>

            <NavLink to='/' id="logo-wrapper">
                <img src="./fabio_spin.gif" alt="fabio_spin" />
            </NavLink>

            <div>
                <NavLink to='/'>Home Page</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/posts-page'>Posts Page</NavLink>
            </div>

        </nav>
    )
}