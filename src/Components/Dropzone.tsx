import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const PhotoUploader = ({ onUpload }: any) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Обработка загруженных файлов
    const urls = acceptedFiles.map((file: any) => URL.createObjectURL(file));
    onUpload(urls);
  }, [onUpload]);

  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center cursor-pointer">
      <input {...getInputProps()} />
      <p>Перетащите сюда файлы или нажмите для выбора</p>
    </div>
  );
};

export default PhotoUploader;
