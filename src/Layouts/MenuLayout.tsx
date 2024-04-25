import { Outlet } from "react-router"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const MenuLayout = () => {
    return (
        <div className="mt-[80px]">
            <Header />
            <div className="min-h-[50vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MenuLayout