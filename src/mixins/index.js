import Sitemap from '@/router/Sitemap'
import description from '@/data/description'

// Global mixins
export default {
  data: function () {
    return {
      get Sitemap () {
        return Sitemap
      },
      get description () {
        return description
      }
    }
  }
}
