import { coordinateData } from './coordinateData'

export function convertData(data: {length: any, name: any, value: any }[]) {
  const res:any = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord:any = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
