const customHeaders = (req, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin')
    res.header('Cross-Origin-Embedder-Policy', 'require-corp')
    next()
  }
  
  module.exports = {
    middleware: [customHeaders],
    // other settings
  }
