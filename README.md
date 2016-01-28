# kreaktiv_website
Kreativs neue Webseite
www.kreaktiv-muenster.de

# files
Edit src files only
edit main.html to generate index.html via htmlmin task (or default)
image source folder is : ./img/<IMAGENAME>

# Local
grunt serve

# Tasks
### Default task(s).
run: grunt

grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'htmlmin']);

Minifize javascript from '.src/js/ *.js' into './build/kreaktiv-munester.de.min.js'
runs sass runner from './src/sass/ .sass' to './src/css/ *.css'
minifize css from '.src/css/ *.css' into './build/kreaktiv-munester.de.min.css'
minifize html from './src/parts/ *.html' into './build/parts/ *.html' and './main.html' into './index.html'

### imagemin task(s)
run: grunt image (imagepng, imagejpg)

grunt.registerTask('image', ['imagemin']);
grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files

minifize images from './src/images/ *.jpg/png' into './build/img/ *.*'

### css task(s)
grunt.registerTask('validateBootstrap', ['bootlint']);
grunt.registerTask('css', ['sass', 'cssmin']);

### html task(s)
grunt.registerTask('html', ['htmlmin']);

# todo
implement grunt watch
implement grunt browserSync

refactor build to dist

refactor libs into bower client libs from npm
refactor bower into app/lib via .bowerrc

refactor into app
-> app/index.html
-> app/dist/...
-> app/lib/bower_components/...
