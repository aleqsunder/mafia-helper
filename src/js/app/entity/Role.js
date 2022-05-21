export default class Role {
    constructor() {
        this._name = ''
        this._max = 1
    }
    
    get name() {
        return this._name
    }
    
    set name(name) {
        this._name = name
    }
    
    get max() {
        return this._max
    }
    
    set max(max) {
        this._max = max
    }
    
    get info() {
        return {
            name: this._name,
            max: this._max
        }
    }
}