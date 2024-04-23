import { Button, Input, Link } from "@nextui-org/react"
import SearchIcon from '@mui/icons-material/Search';
import { phone } from "../Utils/Global";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuHD from "./Menu";
import { useLocation } from "react-router";
import {useMediaQuery } from "@mui/material";
import { matches1000, matches1167 } from "../Utils/Sizes";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import AnchorTemporaryDrawer from "./Drawer";
import SearchModal from "./SearchModal";

const Header = () => {
    const path = useLocation()
    const is1167 = useMediaQuery(matches1167)
    const is1000 = useMediaQuery(matches1000)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [searchOpen, setSearchOpen] = useState<boolean>(false)

    return (
        <header className="w-full h-[80px] fixed z-[49] top-0 header flex justify-center items-center">



            <div className="max-w-[1920px] w-full h-full px-[20px] py-[10px] flex justify-between items-center" >
                <div className="h-full flex noxs1000:gap-[10px] items-center gap-[20px]" >
                    <a href="/" className="h-full noxs1000:h-[50px]">
                        <img src="/sublogo.png" className="h-full" alt="" />
                    </a>

                    {is1167 && <Link isBlock size="lg" className="flex gap-[10px]" href={`tel:${phone}`} color="foreground">
                        <LocalPhoneIcon />{phone}
                    </Link>}
                    {!is1000 &&
                        <Button onClick={() => setMenuOpen(true)} size="lg" isIconOnly variant="flat" color="primary">
                            <MenuIcon />
                        </Button>
                    }
                </div>


                {is1000 &&

                    <div className="flex items-center gap-[20px]">
                        <MenuHD path={path.pathname} />
                    </div>

                }


                <div className="flex gap-[10px]">


                    {is1167 && <Input
                        type="search"
                        placeholder="Поиск по сайту..."
                        className="w-[200px]"
                        onClick={() => setSearchOpen(true)}
                        readOnly
                        startContent={
                            <SearchIcon />
                        }
                    />}


                    {!is1167 &&
                        <>
                            <Button size="lg" isIconOnly color="primary">
                                <LocalPhoneIcon />
                            </Button>
                            <Button size="lg" onClick={() => setSearchOpen(true)} isIconOnly>
                                <SearchIcon />
                            </Button></>
                    }


                </div>
            </div>


            {/* <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3A22010bc2e3338df48cd45f2188b3a0032f7115b5e025fabb20d0471f03423cb1" width="100%" height="400px" style={{display: 'block'}}></iframe>
         */}
            <AnchorTemporaryDrawer setState={setMenuOpen} state={menuOpen} />
            <div className="z-[999]">
                <SearchModal open={searchOpen} setOpen={setSearchOpen} />
            </div>
        </header>
    )
}

export default Header