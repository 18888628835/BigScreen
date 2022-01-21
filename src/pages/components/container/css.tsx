/*
 * @Author: 邱彦兮
 * @Date: 2021-10-21 14:32:06
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-11-26 17:08:19
 * @FilePath: /ynym-view/src/pages/bigScreen/province/components/container/css.tsx
 */
import styled from 'styled-components';

const Wrap = styled.div`
  &.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0.451977rem;
    background: #001536;
    border: 1px solid rgb(10, 49, 82);
  }
  .title_right {
    color: rgba(64, 205, 241, 0.4);
    cursor: pointer;
    > ul {
      position: relative;
      display: flex;
      align-items: center;
      li {
        height: 100%;
        margin-right: 0.451977rem;
        padding-bottom: 0.141243rem;
        font-size: var(--second-title-fz);
      }
      .active {
        position: relative;
        bottom: -2px;
        color: #3dd7ff;
        border-bottom: 2px solid currentColor;
      }
    }
  }
  .content {
    flex: 1;
    width: 100%;
    height: 100%;
    margin-top: 0.338983rem;
  }
`;
export default Wrap;
