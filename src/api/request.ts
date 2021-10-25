import axios, { AxiosRequestConfig } from "axios";
import JSONbig from "json-bigint"
// import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import localStorageWc from "@/utils/localStorage"

declare module "axios" {
  export interface AxiosRequestConfig {
    /**
     * @description 设置为true，则会在请求过程中显示loading动画，直到请求结束才消失
     */
    loading?: boolean
    isDialog?: boolean
  }
}

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  transformResponse: [function (data) {
    // 后端返回的数据可能不是 JSON 格式字符串
    // 如果不是的话，那么 JSONbig.parse 调用就会报错
    // 所以我们使用 try-catch 来捕获异常，处理异常的发生
    try {
      // 如果转换成功，则直接把结果返回
      return JSONbig.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      // 如果转换失败了，则进入这里
      return data
    }
  }],
  timeout: 50000,
})

request.interceptors.request.use(
  (config: AxiosRequestConfig) =>  {
    const token = localStorageWc.get('token')
    if(token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    // const loading = ElLoading.service({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)',
    // })
    return config
  },
  err => {
    ElMessage.error(err)
  }
)

request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    ElMessage.error(err.name)
    console.log(err, '这是错误信息')
  }
)

export default request