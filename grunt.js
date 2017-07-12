

module.exports = function(grunt){
	// configuration
	
	grunt.initConfig({
		//pass in options to plugins, reference to files etc
		concat:{
			
			js:{
				
				src :  ['js/*.js']
				dest : 'build/script.js'
				
			}
			// for css as well
		}
		
	});
	
	//load plugggins
	grunt.loadNpmTasks('grunt=contrib-concat');
	
	//register task
	
	grunt.registerTask('run',function(){
		console.log('I am runnign');
		
	});
	grunt.registerTask('sleep',function(){
		console.log('I am sleeping');
		
	});
	grunt.registerTask('all',['sleep','run']);
	
}