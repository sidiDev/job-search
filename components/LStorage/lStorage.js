class LStorage {
    getItem(key) {
        return localStorage.getItem(key)
    }

    setItem(key, value) {
        const getItem = this.getItem(key)
        if (getItem) {
            localStorage.setItem(
                key,
                JSON.stringify([...JSON.parse(getItem), value])
            )
        } else localStorage.setItem(key, JSON.stringify([value]))
    }

    clear() {
        localStorage.clear()
    }
}

const lStorage = new LStorage()
export default lStorage