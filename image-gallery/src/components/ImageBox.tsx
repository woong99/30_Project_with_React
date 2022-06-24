import React from 'react';

interface Props {
  src: string;
}

const ImageBox: React.FC<Props> = ({ src }) => {
  return (
    <div className="image-box">
      <img src={src} alt="사진" />
    </div>
  );
};

export default ImageBox;
