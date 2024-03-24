import areas from '../json/areas.json'
import cities from '../json/cities.json'
import provinces from '../json/provinces.json'

// 通过城市名称获取完整层级的城市代码数组（省，市，区）
export function getFullCityCodesByName (cityName) {
  const fullCityCodes = []

  // 在地区中查找
  const area = areas.find(a => a.name === cityName)
  if (area) {
    fullCityCodes.push(area.provinceCode, area.cityCode, area.code)
    return fullCityCodes
  }

  // 在城市中查找
  const city = cities.find(c => c.name === cityName)
  if (city) {
    fullCityCodes.push(city.provinceCode, city.code)
    return fullCityCodes
  }

  // 在省份中查找
  const province = provinces.find(p => p.name === cityName)
  if (province) {
    fullCityCodes.push(province.code)
    return fullCityCodes
  }

  return null // 如果没有找到，返回 null
}

// 通过城市代码数组获取最后一级的城市名称
export function getCityNameByCode (cityCodes) {
  if (!Array.isArray(cityCodes) || cityCodes.length === 0) {
    return null
  }

  // 获取数组的最后一个元素（最具体的层级）
  const code = cityCodes[cityCodes.length - 1]

  // 从区域开始查找
  const area = areas.find(a => a.code === code)
  if (area) {
    return area.name
  }

  // 如果没有找到区域，查找城市
  const city = cities.find(c => c.code === code)
  if (city) {
    return city.name
  }

  // 如果没有找到城市，查找省份
  const province = provinces.find(p => p.code === code)
  if (province) {
    return province.name
  }

  return null // 如果没有找到，返回 null
}
