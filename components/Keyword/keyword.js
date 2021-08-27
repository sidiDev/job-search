import lStorage from "../LStorage/lStorage"

export default () => {
    let getItems = lStorage.getItem('data')

    if (getItems) {

      getItems = JSON.parse(getItems)

      const obj = {}
      const keys = []

      // Duplicated numbers
      for (let key in getItems) {

        if (!obj[getItems[key]]) {
          obj[getItems[key]] = 0
          keys.push(getItems[key])
        }
        obj[getItems[key]] = obj[getItems[key]] + 1

      }

      // Most used keyword

      let numbers = []
      let values = []
      let maxNum;
      let keyword = ''
      for (let i = 0; i < keys.length; i++) {
        
        numbers.push(obj[keys[i]])
        values.push(maxNum = {
          key: obj[keys[i]],
          value: keys[i]
        })
        maxNum = Math.max(...numbers)
        if (maxNum == values[i].key) {
          keyword = values[i]
        }
      }
      
      return keyword

    }
}