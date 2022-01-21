/*
 * @Author: your name
 * @Date: 2021-09-27 09:27:43
 * @LastEditTime: 2021-09-27 16:44:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \njghz\ynym-view\src\pages\bigScreen\province\Bottom\BRight.tsx
 */
import React from 'react';
import image from '@/assets/province/image.png';
import Container from '../components/container';

type BRightProps = {
  data: MapDataTypes.RelocationNew[];
};
const BRight = React.memo<BRightProps>((props) => {
  return (
    <Container text="重点工作推进情况">
      <div className="b_right_content">
        {(props.data || []).map((item) => (
          <a
            href={`/homePage/details/?newsId=
            ${item.newsId}`}
            target="_blank"
          >
            <img src={item.coverPic} alt="" />
            <span className="title">{item.title}</span>
          </a>
        ))}
      </div>
    </Container>
  );
});

export default BRight;
