module.exports = {
    lintOnSave: false,
    configureWebpack: {
      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        disableHostCheck: true,
        //sockPort: 8503,
        sockHost: "localhost",
        //https: true,
        //port: 8503
      },
      externals: [/^@app2\/.+/, /^app2\/.+/]
    },
    filenameHashing: false
  };