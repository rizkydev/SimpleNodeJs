module.exports = {

  apps : [

    // First application
    {
      name      : 'API-Test',
      script    : 'src/app.js',
	  instances : 'max',
      exec_mode  : "cluster",
      watch: true,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

};
