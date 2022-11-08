# Dr.Bean

1. npm install -g node-sass
2. npm install --save-dev node-sass
3. trong file package.json , thêm script như VD:

	"devDependencies": {
		"node-sass": "4.5.0"
	},
	"scripts" : {
		"donation-info": "node-sass --output-style compressed -o assets/css assets/scss"
	}
	
4. chạy script: 
	- Compile 1 file: npm run donation-info
		hoặc: sass --watch input.scss output.css
	- Compile 1 folder: sass --watch assets/scss:assets/css
