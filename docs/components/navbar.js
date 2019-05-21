import Lily from 'https://unpkg.com/lily@0.2.2/index.js'
import Brand from './brand.js'
import Navigation from './navigation.js'

class Navbar extends Lily {
  components () {
    return {
      brand: Brand,
      navigation: Navigation
    }
  }

  template () {
    return /* html */`
      <div class="topbar navbar">
        <brand brand="Lily.js"></brand>        
        <navigation></navigation>
      </div>
    `
  }
}

export default Navbar