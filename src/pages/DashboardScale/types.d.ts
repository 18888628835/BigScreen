/*
 * @Author: 邱彦兮
 * @Date: 2022-01-21 10:15:04
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-21 10:16:50
 * @FilePath: /BigScreen/src/pages/DashboardScale/types.d.ts
 */

export interface DashboardScaleProps {
  /**
   * @description       宽度
   * @default           1920
   */
  width?: number;
  /**
   * @description       父容器的ID
   * @default           document.documentElement
   */
  parentId?: string;
  /**
   * @description       高度
   * @default           1080
   */
  height?: number;
  /**
   * @description       防抖延迟
   * @default           300
   */
  delay?: number;
}
