import { Card, Image, Input, Modal, ModalContent } from '@nextui-org/react'
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress, Divider } from '@mui/material';
import axios from 'axios';
import { burl } from '../Utils/Global';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { MenuItems } from './Menu';
import { professions } from '../Pages/Directions';
import { getLang } from '../Utils/Utils';

type Props = {
    open: boolean,
    setOpen: any
}

type T_SearchData = {
    title: string,
    link: string,
    description?: string,
}

const SearchModal = (props: Props) => {
    const langru = getLang()
    const [searchData, setSearchData] = useState<T_SearchData[]>([])
    const [searchData2, setSearchData2] = useState<T_SearchData[]>([])
    const [load, setload] = useState<boolean>(true)
    const path = useLocation()
    const [vli, setVli] = useState<any>('')
    const fetchData = async () => {
        setSearchData([])
        setSearchData2([])

        try {


            const req = await axios.get(burl + 'news.json')
            const elems = await Object.keys(req.data).map(key => {
                const newsItem = req.data[key];
                newsItem.key = key;
                return newsItem;
            }).reverse()


            if (elems.length > 0) {
                await elems.forEach((item: any) => {
                    let data = {
                        title: item.title,
                        link: '/news/' + item.key,
                        description: item.desc
                    }

                    setSearchData(searchData => [...searchData, data])
                    setSearchData2(searchData => [...searchData, data])
                })

                await MenuItems.forEach((item: any) => {
                    let data = {
                        title: item.text,
                        link: item.link
                    }


                    setSearchData(searchData => [...searchData, data])
                    setSearchData2(searchData => [...searchData, data])
                })


                await professions.forEach((item: any) => {
                    let data = {
                        title: item.title,
                        link: '/directions'
                    }


                    setSearchData(searchData => [...searchData, data])
                    setSearchData2(searchData => [...searchData, data])
                })

            }


            setload(false)


        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };



    useEffect(() => {
        props.setOpen(false)
    }, [path])

    useEffect(() => {
        setload(true)
        fetchData()
    }, [props.open])




    function handleSearch(e: any) {
        const vl = e.target.value;
        setVli(vl)
        const results = searchData.filter(
            item =>
                item.title.toLowerCase().includes(vl.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(vl.toLowerCase()))
        );

        setSearchData2(results);

        if (vl == '') {
            setSearchData2(searchData)
        }
    }


    return (
        <Modal isOpen={props.open} hideCloseButton onClose={() => props.setOpen(false)} backdrop='blur' placement='center'>
            <ModalContent className='w-[500px] p-[20px] noxs658:w-full'>


                <Input
                    type="search"
                    fullWidth
                    placeholder="Поиск по сайту..."
                    startContent={<SearchIcon />}
                    onChange={handleSearch}
                />

                <div className='pt-[20px]'>
                    <Divider />
                </div>


                <div className='flex flex-col mt-[20px] gap-[20px] w-full max-h-[400px] scrollbar-hide overflow-auto'>
                    {searchData2.length == 0 ?
                        !load ?
                            <div className='w-full h-[300px] flex justify-center items-center'>
                                {/* <ContentPasteSearchIcon color='primary' sx={{fontSize: 100}} /> */}
                                <div className='flex flex-col gap-[20px] items-center'>
                                    <Image src='/emp.gif' width={200} />
                                    <p className='text-center opacity-70 font-bold max-w-[300px]'>{langru ? `Нет результатов по запросу "${vli}"` : `"${vli}" uchun hech qanday natija topilmadi`}</p>

                                </div>
                            </div>
                            :
                            <div className='w-full h-[300px] flex justify-center items-center'>
                                <CircularProgress size={50} />
                            </div>
                        :

                        searchData2.map((item: any) =>
                            <Link to={item.link}>
                                <Card shadow='none' className='min-h-[50px] bg-[#6f7ef22e] cursor-pointer hover:bg-primary hover:text-white p-[15px] border-primary border-[1px]'>
                                    <p className='tsis w-full'>{item.title}</p>
                                </Card>
                            </Link>
                        )
                    }
                </div>

            </ModalContent>
        </Modal>
    )
}

export default SearchModal