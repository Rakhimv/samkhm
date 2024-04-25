import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const DirecHome = () => {
    return (
        <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
            <div className='container max-w-[900px] '>
                <div className='flex gap-[20px] noxs658:flex-col'>
                    <Card className="col-span-12 sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">Диагностика и ремонт автомобильных двигателей</h4>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/image20.png"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">Сварщик (электрогазосварочные работы)</h4>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/image22.png"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px] noxs658:h-[200px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <div className="shad w-full">
                                <h4 className="text-white font-medium text-large">Операторы компьютерной графики и дизайна</h4>
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
                        <Button variant='flat' color='primary' endContent={<NavigateNextIcon />}>Все направления</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DirecHome