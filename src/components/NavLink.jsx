import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo"
export default function Navlink() {
    return (
        <nav className="container d-flex align-items-center justify-content-between p-4">

            <Logo />

            <div className="d-flex gap-4">
                <NavLink className={'h4 link-dark link-underline-opacity-0 link-underline-opacity-100-hover'} to='/'>Home Page</NavLink>
                <NavLink className={'h4 link-dark link-underline-opacity-0 link-underline-opacity-100-hover'} to='/contacts'>Contacts</NavLink>
                <NavLink className={'h4 link-dark link-underline-opacity-0 link-underline-opacity-100-hover'} to='/products'>Products</NavLink>
            </div>

        </nav >
    )
}