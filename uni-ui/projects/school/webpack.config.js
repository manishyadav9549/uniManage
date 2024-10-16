const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "school",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust) // Micro Frontends
        name: "school", // Name of the remote module
        filename: "remoteEntry.js", // Name of the emit that remote the entry file, file with all the metadata 
        exposes: { // contains which files to expose, it can a module, component, service, function,  object
            './Module': './projects/school/src/app/app.module.ts',
        },

        // method 1: It is used to share common libraries across multiple micro-frontend, 
        // so that the libraries don't get loaded for every application repeatedly
        // shared = ['@angular/core','@angular/common']

        //method 2: It is used to share common libraries across multiple micro-frontend, 
        // so that the libraries don't get loaded for every application repeatedly
        // It allowes you to define how to behave when there is version conflict. 
        // singleton: true gets the higher version in case of verison conflict b/w mfes (highlander principle)
        // strictVersion: true, gets highest version + run time error
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, // singleton: true means in 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
