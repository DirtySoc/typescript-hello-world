// https://github.com/TypeStrong/grunt-ts
module.exports = function(grunt) {
    grunt.initConfig({
      ts: {
        default : {
          tsconfig: './tsconfig.json'
        }
      }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
  };