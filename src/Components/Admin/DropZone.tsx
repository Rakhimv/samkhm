import { Button, Image } from '@nextui-org/react';
import React, { useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import CloseIcon from '@mui/icons-material/Close';


interface PhotoUploaderProps {
    onUpload: (urls: string[]) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onUpload }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Фильтрация только изображений
        const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length > 0) {
            // Обработка загруженных файлов
            const urls = imageFiles.map(file => URL.createObjectURL(file));
            onUpload(urls);
        } else {
            // Можно вывести сообщение об ошибке
            console.error('Неверный формат файла. Пожалуйста, загрузите только изображения.');
        }
    }, [onUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop, accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': []
        }
    });

    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} accept='image/*' />
            <p>Перетащите сюда файлы или нажмите для выбора</p>
        </div>
    );
};


const dropzoneStyles: React.CSSProperties = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
};


type DropZone = {
    handleUpload: any,
    handleDelete: any,
    photoUrls: string[],
    setPhotoUrls: React.Dispatch<React.SetStateAction<string[]>>
}

const DropZone: React.FC<DropZone> = (props) => {


    return (
        <div>
            <h1 className='mb-[10px]'>Загрузка фотографий</h1>
            <PhotoUploader onUpload={props.handleUpload} />
            {props.photoUrls.length > 0 &&
                <div className='flex flex-wrap gap-[15px] my-[20px]'>
                    {props.photoUrls.map((url: string, index: number) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <Zoom>
                                <Image radius='sm' className='border-gray-400 m0_imp border-[1px] h-[100px] w-auto' key={index} src={url} alt={`Photo ${index}`} style={photoStyles} />
                            </Zoom>
                            <Button isIconOnly className='absolute top-1 right-1 z-[10]' onClick={() => {
                                props.handleDelete(index)
                            }} size='sm'>
                                <CloseIcon />
                            </Button>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

const photoStyles: React.CSSProperties = {
    maxWidth: '200px',
    maxHeight: '200px',
    margin: '10px'
};

export default DropZone;
