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

      const numbers = []
      let keyword = '';
      for (let i = 0; i < keys.length; i++) {
        numbers.push({
          key: obj[keys[i]],
          value: keys[i]
        })
        let maxNum = numbers[0]
        if (obj[keys[i]] > maxNum.key) {
          maxNum = {
            key: obj[keys[i]],
            value: keys[i]
          }
        }
        keyword = maxNum
      }

      return keyword

    }
}