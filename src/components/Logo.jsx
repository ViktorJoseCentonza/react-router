import { Link, NavLink } from "react-router-dom";

export default function LogoWrapper() {

    return (
        <NavLink to='/' id="logo-wrapper">
            <img src="./fabio_spin.gif" alt="fabio_spin" />
        </NavLink>
    )

}