import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react"
import { burl } from "../../Utils/Global";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { formatTimestamp } from "../../Utils/Utils";
import { useNavigate } from "react-router";

const GetNews = () => {

    const [news, setNews] = useState<any>()
    const navigate = useNavigate()
    const [isLoad, setIsLoad] = useState<boolean>(true)


    const GetNews = async () => {
        try {
            const req = await axios.get(burl + 'news.json')
            setNews(Object.keys(req.data).map(key => {
                const newsItem = req.data[key];
                newsItem.key = key;
                return newsItem;
            }).reverse())
            setIsLoad(false)
            console.log(news);

        } catch {
            console.log('Error');
            setIsLoad(false)
        }
    }


    const deleteNew = async (key: string) => {
        try {
            await axios.delete(burl + 'news/' + key + '.json')
        } catch {
            console.log('Error');
        }
    }


    useEffect(() => {
        GetNews()
        
    }, [])


    return (
        <div>{news ?
            <div className="w-full">
                {news.map((item: any, index: any) =>
                    <Dropdown placement="bottom-end" backdrop="transparent">
                        <DropdownTrigger>
                            <ListItem style={{ width: '100%', backgroundColor: 'background.paper' }} key={index} component="div" disablePadding>

                                <ListItemButton>
                                    <div className="w-full flex">
                                        <ListItemText primary={<p className="max-w-[80%] tsis">{item.title}</p>} secondary={<p className="max-w-[60%] tsis">{item.desc}</p>} />
                                        <p className="text-nowrap underline">{formatTimestamp(item?.ctime)}</p>
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Action event example"
                            onAction={(key) => {
                                if (key == 'open') {
                                    navigate(`/news/${item.key}`)
                                } else if (key == 'delete') {
                                    deleteNew(item.key)
                                    if (news.length > 1) {
                                        setNews(news.filter((i: any) => i.key !== item.key))
                                    } else {
                                        setNews(null)
                                    }
                                }
                            }}

                        >
                            <DropdownItem key="open">Открыть</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Удалить
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
            </div>
            :
            isLoad ?
                <div className="w-full h-[300px] flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
                :
                <div className="w-full h-[300px] flex items-center justify-center">
                    Пусто
                </div>

        }</div>
    )
}

export default GetNews