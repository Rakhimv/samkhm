import { Button, Input, Link } from "@nextui-org/react"
import SearchIcon from '@mui/icons-material/Search';
import { phone } from "../Utils/Global";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuHD from "./Menu";
import { useLocation } from "react-router";
import { useMediaQuery } from "@mui/material";
import { matches1000, matches1167 } from "../Utils/Sizes";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import AnchorTemporaryDrawer from "./Drawer";
import SearchModal from "./SearchModal";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { getLang } from "../Utils/Utils";

const Header = () => {
    const path = useLocation()
    const is1167 = useMediaQuery(matches1167)
    const is1000 = useMediaQuery(matches1000)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [searchOpen, setSearchOpen] = useState<boolean>(false)
    const langru = getLang()
    return (
        <header className="w-full h-[80px] fixed z-[49] top-0 header flex justify-center items-center">
            <div className="max-w-[1920px] w-full h-full px-[20px] py-[10px] flex justify-between items-center" >
                <div className="h-full flex noxs1000:gap-[10px] items-center gap-[20px]" >
                    {is1167 && <a href="/" className="h-full noxs1000:h-[50px]">
                        <img src="/sublogo.png" className="h-full" alt="" />
                    </a>}
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
                        placeholder={langru === 'en' ? "Search the site..." : langru === 'ru' ? "Поиск по сайту..." : "Sayt bo'ylab qidirish..."}
                        className="w-[200px]"
                        onClick={() => setSearchOpen(true)}
                        readOnly
                        startContent={
                            <SearchIcon />
                        }
                    />}
                    {!is1167 &&
                        <>
                            <a href={`tel:${phone}`}>
                                <Button size="lg" isIconOnly color="primary">
                                    <LocalPhoneIcon />
                                </Button>
                            </a>
                            <Button size="lg" onClick={() => setSearchOpen(true)} isIconOnly>
                                <SearchIcon />
                            </Button>
                        </>
                    }
                    <Dropdown placement="bottom-end" backdrop="transparent">
                        <DropdownTrigger>
                            <Button
                                variant={!is1167 ? 'solid' : 'flat'}
                                isIconOnly
                                className="capitalize"
                                size={!is1167 ? 'lg' : 'md'}
                            >
                                <img className="w-[30px] h-[20px] rounded-md" src={`/${langru === 'en' ? 'en.png' : langru === 'ru' ? 'ru.svg' : 'uz.svg'}`} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Action event example"
                            onAction={(key) => {
                                if (key === 'ru') {
                                    localStorage.setItem('lang', 'ru')
                                    window.location.reload()
                                } else if (key === 'uz') {
                                    localStorage.setItem('lang', 'uz')
                                    window.location.reload()
                                } else if (key === 'en') {
                                    localStorage.setItem('lang', 'en')
                                    window.location.reload()
                                }
                            }}
                        >
                            <DropdownItem key="ru">
                                <div className="flex gap-[10px] items-center font-medium"> <img className="w-[30px] rounded-md" src={`/ru.svg`} />
                                    Русский</div>
                            </DropdownItem>
                            <DropdownItem key="uz">
                                <div className="flex gap-[10px] items-center font-medium"> <img className="w-[30px] rounded-md" src={`/uz.svg`} />
                                    O'zbekcha</div>
                            </DropdownItem>
                            <DropdownItem key="en">
                                <div className="flex gap-[10px] items-center font-medium"> <img className="w-[30px] rounded-md h-[20px]" src={`/en.png`} />
                                    English</div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <AnchorTemporaryDrawer setState={setMenuOpen} state={menuOpen} />
            <div className="z-[999]">
                <SearchModal open={searchOpen} setOpen={setSearchOpen} />
            </div>
        </header>
    )
}

export default Header
