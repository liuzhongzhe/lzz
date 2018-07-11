//变量缓存器，方便在不同类中，访问和修改变量
export class DataStore {
	static getInstance() {
		if(!DataStore.instance) {
			DataStore.instance = new DataStore()
		}
		return DataStore.instance
	}
	constructor() {
		this.map = new Map()
	}
	put(key, value) {
		this.map.set(key, value);
		return this;
	}
	get(key) {
		return this.map.get(key);
	}
	distory() {
		for(let value of this.map.values()) {
			value = null;
		}
	}
}