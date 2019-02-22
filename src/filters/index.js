import searchQuestion from './searchQuestion'

const GlobalFilters = {
  install (Vue) {
    Vue.filter('searchQuestion', searchQuestion)
  }
}

export default GlobalFilters
