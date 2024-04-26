import { useRef } from 'react';
import jsPDF from 'jspdf';
import { Button } from '@nextui-org/react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { formatTimeDetal } from '../Utils/Utils';
import html2canvas from 'html2canvas';


const PDFGenerator = ({ news }: any) => {

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
            const imgX = 0; // Adjust X position as needed
            const imgY = 0; // Adjust Y position as needed
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`${news.title}.pdf`);
        });
    }





    const Pdff = (

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
    )


    return (
        <>
            <div>{Pdff}</div>

            <Button
                onClick={downPDF}
                variant='faded'
                radius='sm'
                isIconOnly
            >
                <PictureAsPdfIcon />
            </Button >
        </>
    );

}

export default PDFGenerator;
