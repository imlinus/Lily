import Compile from './compile.js'
import config from './config.js'
import * as log from './utils/log/index.js'

class Lily {
  constructor (app, el) {
    log.welcome(this)
    this.app = new app()
    this.el = (el instanceof HTMLElement ? el : el = document.body)

    this.defineReactive(this.app)
    new Compile(this.app, this.el)

    console.log(this)
  }

  defineReactive (obj) {
    for (const [key, val] of Object.entries(obj)) {
      if (key === 'data') {
        for (const data of Object.keys(val)) {
          this.proxyData(obj, data)
        }
      } else if (key === 'components') {
        for (const component of Object.entries(val)) {
          this.defineReactive(component[1])
        }
      }
    }
  }

  proxyData (obj, key) {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      get () {
        return obj.data[key]
      },
      set (val) {
        obj.data[key] = val
      }
    })
  }

  get (key) {
    return this.app[key]
  }

  set (key, val) {
    this.app[key] = val
  }
}

Lily.prototype.config = config

export default Lily
