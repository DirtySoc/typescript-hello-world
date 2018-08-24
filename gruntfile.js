<<<<<<< HEAD
// 
=======
// https://github.com/TypeStrong/grunt-ts
>>>>>>> 652cde0c51ff40d9110562c8e7ced66ee3187f88
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