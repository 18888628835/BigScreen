import Container from '@/components/container';
import React from 'react';
import { ScrollBoard } from '@jiaminghi/data-view-react';

const BLeft = () => {
  const config = {
    header: ['排名', '州市', '评分'],
    columnWidth: [50],
    headerBGC: 'black',
    headerHeight: 20,
    evenRowBGC: 'rgba(10, 43, 77, 0.6)',
    oddRowBGC: '#001436',
    data: [
      ['<span class="pm pm1">1<span>', '行1列2', '行1列3'],
      ['<span class="pm pm2">2<span>', '行2列2', '行2列3'],
      ['<span class="pm pm3">3<span>', '行3列2', '行3列3'],
      ['4', '行4列2', '行4列3'],
      ['5', '行5列2', '行5列3'],
      ['6', '行6列2', '行6列3'],
      ['7', '行7列2', '行7列3'],
      ['8', '行8列2', '行8列3'],
      ['9', '行9列2', '行9列3'],
      ['10', '行10列2', '行10列3'],
    ],
  };

  return (
    <Container text='州市目标责任制考核'>
      <div className='bottom_left_content'>
        <ScrollBoard config={config} />
      </div>
    </Container>
  );
};

export default BLeft;
