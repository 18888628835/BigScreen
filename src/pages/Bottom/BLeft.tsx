import Container from '../components/container';
import React from 'react';
import { ScrollBoard } from '@jiaminghi/data-view-react';

type BLeftProps = {
  data: string[][];
};
const BLeft = React.memo<BLeftProps>((props) => {
  const config = {
    header: ['排名', '州市', '评分'],
    columnWidth: [80],
    headerBGC: 'transparent',
    headerHeight: 20,
    evenRowBGC: 'rgba(10, 43, 77, 0.6)',
    oddRowBGC: '#001436',
    data: props.data,
  };

  return (
    <Container text="州市目标责任制考核">
      <div className="bottom_left_content">
        <ScrollBoard config={config} />
      </div>
    </Container>
  );
});

export default BLeft;
