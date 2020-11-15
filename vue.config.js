const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/About',
            '/Distressed',
            '/Investor',
            '/Realtor',
            '/Short-Sale',
            '/Contact',
            '/thanks',
            '/404'
          ],
        }),
      ]
    }
  }
}