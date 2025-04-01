import { Outlet } from "react-router-dom";
import NavLink from "../components/NavLink";


export default function DefaultLayout() {
    return (
        <>
            <NavLink />
            <Outlet />
        </>
    )
}