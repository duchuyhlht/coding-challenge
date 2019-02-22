import bgImg from './bg-img'

const GlobalDirectives = {
  install (Vue) {
    Vue.directive('bg-img', bgImg)
  }
}

export default GlobalDirectives
