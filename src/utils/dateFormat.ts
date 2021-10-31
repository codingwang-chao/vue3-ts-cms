/**
 * 定义全局格式化时间方法
 * 
 * 这里定义一个全局的方法，通过golbal文件下的register-properties.ts，设置为全局属性$filters对象中的一个属性
 * 然后就可以通过$filters.formatTime()来进行全局使用
 * 
 * 使用dayjs这个第三方库来进行时间格式化
 * 通过npm install dayjs 下载
 */

import dayjs from "dayjs";

// 如果要支持utc格式的转化，导入utc
import utc from 'dayjs/plugin/utc'

// 然后将utc加入到dayjs中
dayjs.extend(utc)

const DATA_ITEM_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(utcString: any, format = DATA_ITEM_FORMAT) {
  return dayjs.utc(utcString).format(format)
}