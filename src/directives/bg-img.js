export default {
  bind: function (el, binding, vnode) {
    el.style.background = `url(${binding.value}) no-repeat center`
    el.style.backgroundSize = 'cover'
  }
  // unbind: function (el) { }
}
