import React from 'react';
import image from '@/assets/image.png';
import Container from '@/components/container';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const BRight = () => {
  return (
    <Container text='移民资讯'>
      <div className='b_right_content'>
        <a>
          <div className='img_wrap'>
            <img src={image} alt='' />
          </div>
          <div className='p'>
            <div>资讯标题</div>
            <div>
              资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容
            </div>
          </div>
        </a>
        <a>
          <div className='img_wrap'>
            <img src={image} alt='' />
          </div>
          <div className='p'>
            <div>资讯标题</div>
            <div>
              资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容
            </div>
          </div>
        </a>
        <a>
          <div className='img_wrap'>
            <img src={image} alt='' />
          </div>
          <div className='p'>
            <div>资讯标题</div>
            <div>
              资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容
            </div>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default BRight;
