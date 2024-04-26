import jsPDF from 'jspdf';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { formatTimeDetal } from '../Utils/Utils';

const Pf = () => {
    const [news] = useState<any>(JSON.parse(localStorage.getItem('news') || "null"))
    const pdfRef = useRef<any>();
    const downPDF = async () => {
        const input = pdfRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`${news.title}.pdf`);
        });
    }


    async function st() {
        await downPDF()
        setTimeout(() => {
            window.close()
        }, 1000);
    }

    useEffect(() => {
        st()

        console.log('vsyo blyaa');

    }, [])

    return (
        <div>
            <div className="container" ref={pdfRef}>
                <div className="row mb-4">
                    <div className="w-full flex justify-center">
                        <div className="container max-w-[900px] p-[20px] py-[50px]">
                            <div className='flex flex-col w-full gap-[20px]'>

                                <p className='font-bold opacity-60 mt-[20px] noxs658:mt-[20px]'>{formatTimeDetal(news?.ctime)}</p>
                                <h1 className='text-[30px] noxs658:text-[20px] font-bold'>{news.title}</h1>

                                <p className='text-[18px] text-justify' style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: news.desc.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") }}></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Pf