export default function (component) {
  return function (resolve) {
    require(['./../sections/' + component + '.vue'], resolve)
  }
}
