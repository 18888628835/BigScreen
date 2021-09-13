import Container from '@/components/container';
import { ScrollBoard } from '@jiaminghi/data-view-react';
import React from 'react';

const BMiddle = () => {
  const config = {
    header: [
      '省州市',
      '规划总投资',
      '累计完成资金',
      '年度计划资金',
      '年度拨付资金',
      '累计资金完成率',
      '年度资金完成率',
    ],
    columnWidth: [60],
    headerBGC: 'black',
    headerHeight: 20,
    evenRowBGC: 'rgba(10, 43, 77, 0.6)',
    oddRowBGC: '#001436',
    data: [
      ['全省', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['普洱市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
      ['丽江市', '行1列2', '行1列3', '行1列3', '行1列3', '行1列3', '行1列3'],
    ],
  };
  return (
    <Container text='资金监督'>
      <div className='bottom_middle_content'>
        <ScrollBoard config={config} />
      </div>
    </Container>
  );
};

export default BMiddle;
