// Import 'path' module using the 'require()' method:
const path = require('path')

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

const pathInfo = {
    fileName: path.basename(filePath),
    folderName: path.dirname(filePath),
    fileExtension: path.extname(filePath),
    absoluteOrNot: path.isAbsolute(filePath),
    detailInfo: path.parse(filePath),
    absolutePath: path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
}

// Let's See The Results:
console.log(pathInfo)