import { Outlet } from "react-router"
import Header from "../Components/Header"

const MenuLayout = () => {
    return (
        <div className="mt-[80px]">
            <Header />
            <Outlet />
        </div>
    )
}

export default MenuLayout