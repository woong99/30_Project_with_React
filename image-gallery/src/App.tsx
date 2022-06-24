import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
  const inpRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
          setImageList((prev) => [...prev, e.target?.result as string]);
        };
      }
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="container">
      <div className={'gallery-box ' + (imageList.length > 0 && 'row')}>
        {imageList.length === 0 && (
          <div className="text-center">
            이미지가 없습니다.
            <br />
            이미지를 추가해주세요.
          </div>
        )}

        {imageList.map((el) => (
          <ImageBox src={el} key={el} />
        ))}
        <div className="plus-box" {...getRootProps()}>
          <input type="file" ref={inpRef} {...getInputProps()} />+
        </div>
      </div>
    </div>
  );
}

export default App;
