import areas from '../json/areas.json'
import cities from '../json/cities.json'
import provinces from '../json/provinces.json'

// 通过城市名称获取完整层级的城市代码数组（省，市，区）
export function getFullCityCodesByName (cityNamePath) {
  const names = cityNamePath.split('·')
  const codes = []

  // 定位省份
  const province = provinces.find(p => p.name === names[0])
  if (!province) return null
  codes.push(province.code)

  // 如果只有省份，直接返回
  if (names.length === 1) {
    return codes
  }

  // 定位城市
  const city = cities.find(c => c.name === names[1] && c.provinceCode === province.code)
  if (!city) return null
  codes.push(city.code)

  // 如果只有省份和城市，直接返回
  if (names.length === 2) {
    return codes
  }

  // 定位区县
  const area = areas.find(a => a.name === names[2] && a.cityCode === city.code)
  if (!area) return null
  codes.push(area.code)

  return codes
}

// 通过城市代码数组获取城市名称路径（省、市、区）
export function getCityNameByCode (cityCodes) {
  if (!Array.isArray(cityCodes) || cityCodes.length === 0) {
    return null
  }

  const labels = cityCodes.map(code => {
    const area = areas.find(a => a.code === code)
    if (area) {
      return area.name
    }

    const city = cities.find(c => c.code === code)
    if (city) {
      return city.name
    }

    const province = provinces.find(p => p.code === code)
    if (province) {
      return province.name
    }

    return null
  })

  // 过滤掉可能的 null 值，然后连接成完整的路径
  return labels.filter(label => label != null).join('·')
}
