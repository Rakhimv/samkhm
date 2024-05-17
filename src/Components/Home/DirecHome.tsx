import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getLang } from '../../Utils/Utils';

const DirecHome = () => {
    const langru = getLang() === 'en' ? 'en' : getLang() === 'ru' ? 'ru' : 'uz';
    return (
        <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
            <div className='container max-w-[900px] '>
                <div className='flex gap-[20px] noxs658:flex-col'>
                    <Card className="col-span-12 dsd sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">{langru === 'en' ? 'Diagnostics and repair of car engines' : langru === 'ru' ? 'Диагностика и ремонт автомобильных двигателей' : 'Avtomobil dvigatellarini tashxislash va taʼmirlash'}</h4>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/image20.png"
                        />
                    </Card>
                    <Card className="col-span-12 dsd sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">{langru === 'en' ? 'Welder (electric gas welding works)' : langru === 'ru' ? "Сварщик (электрогазосварочные работы)" : "Payvandlovchi (elektrgazpayvandlash ishlari)"}</h4>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/image22.png"
                        />
                    </Card>
                    <Card className="col-span-12 dsd sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">{langru === 'en' ? 'Computer graphics and design operators' : langru === 'ru' ? "Операторы компьютерной графики и дизайна" : "Kompyuter grafikasi va dizayn operatorlari"}</h4>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/image30.png"
                        />
                    </Card>
                </div>


                <div className='w-full flex justify-end mt-[20px]'>

                    <Link to={'/directions'}>
                        <Button variant='flat' color='primary' endContent={<NavigateNextIcon />}>{langru === 'en' ? "All directions" : langru === 'ru' ? "Все направления" : "Barcha yo'nalishlar"}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DirecHome;
