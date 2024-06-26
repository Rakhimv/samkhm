import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { getLang } from "../Utils/Utils";

export const MenuItems = getLang() === 'en' ? [
    {
        text: 'Home Page',
        link: '/',
        icon: <HomeIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Managers',
        link: '/managers',
        icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Directions',
        link: '/directions',
        icon: <BadgeOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Student Gallery',
        link: '/gallery',
        icon: <CollectionsOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'News',
        link: '/news',
        icon: <NewspaperOutlinedIcon sx={{ fontSize: 25 }} />
    },
] : getLang() === 'ru' ? [
    {
        text: 'Главная страница',
        link: '/',
        icon: <HomeIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Руководители',
        link: '/managers',
        icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Направления',
        link: '/directions',
        icon: <BadgeOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Студенческая галерея',
        link: '/gallery',
        icon: <CollectionsOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Новости',
        link: '/news',
        icon: <NewspaperOutlinedIcon sx={{ fontSize: 25 }} />
    },
] : [
    {
        text: 'Bosh sahifa',
        link: '/',
        icon: <HomeIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Rahbarlar',
        link: '/managers',
        icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: "Yo'nalishlar",
        link: '/directions',
        icon: <BadgeOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Talabalar galereyasi',
        link: '/gallery',
        icon: <CollectionsOutlinedIcon sx={{ fontSize: 25 }} />
    },
    {
        text: 'Yangiliklar',
        link: '/news',
        icon: <NewspaperOutlinedIcon sx={{ fontSize: 25 }} />
    },
];



type Props = {
    path: string
}

const MenuHD = ({ path }: Props) => {


    const [active, setActive] = useState<any>(null)


    useEffect(() => {
        console.log(path);
        setActive(path)
    }, [path])

    return (
        <>
            {MenuItems.map((item: any) =>
                <div className="flex flex-col items-center h-[80px] justify-center">

                    <Link to={item.link} className={active == item.link ? 'font-bold' : ''}>
                        {item.text}
                    </Link>
                    {active == item.link &&
                        <div className="w-full hditem"></div>
                    }
                </div>
            )}
        </>
    )
}

export default MenuHD