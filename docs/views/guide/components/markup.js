import Lily from 'https://unpkg.com/lily@0.2.2/index.js'
import syntax from './../../../lil-syntax.js'

const code = document.createElement('code')
const template = syntax(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lily.js</title>
</head>
<body>
  <script type="module" src="./app.js"></script>
</body>
</html>
`.trim(''))

code.innerHTML = template

code.style.whiteSpace = 'pre-wrap'
code.style.display = 'block'

class Markup extends Lily {
  template () {
    return /* html */`
      <div>
        <h3>index.html</h3>
        ${code.outerHTML}
      </div>
    `
  }
}

export default Markup