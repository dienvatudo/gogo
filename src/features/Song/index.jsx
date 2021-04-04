import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'MV Hot! Nhạc Hay!',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/6/d/0/16d02b54ba35948960e7f282cd0093f3.jpg',
    },
    {
      id: 1,
      name: 'Giọng Hát Mới Nổi Bật',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/8/e/1/38e191a57465998d8d51b4c4a7202d5a.jpg',
    },
    {
      id: 2,
      name: 'Acoustic Nhẹ Nhàng Thư Giãn - Various Artists',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/7/3/1/d731326eaf9f0440239438f7d4aa9260.jpg',
    },
    {
      id: 3,
      name: 'Những Khoảng Lặng Cuộc Sống - Various Artists',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/2/3/d/823d9f0132e0d2cb77a5dc373b8e3d53.jpg',
    },
  ];
  return (
    <div>
      <h3>Thư Giãn Cuối Tuần</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
