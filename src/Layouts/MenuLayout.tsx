import { Outlet } from "react-router"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const MenuLayout = () => {
    return (
        <div className="mt-[80px]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MenuLayout