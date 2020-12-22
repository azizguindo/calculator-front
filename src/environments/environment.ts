export const environment = {
  production: false,
  version: '0.0.1v',
  backendspring: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
        current: '/calculator/current',
        add: '/calculator/add',
        accumulate: '/calculator/accumulate',
        subtract: '/calculator/subtract',
        accumulateS: '/calculator/accumulateS'
    }
  }
};
