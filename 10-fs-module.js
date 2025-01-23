// Import fs module
const fs = require('fs');

fs.mkdir('./myFolder', (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Folder Created Successfully');
    }
})

const data = 'Hi, this is new file newFile.txt';

fs.writeFile('./myFolder/newFile.txt', data, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Written to file successfully');
    }
})

// The problem with above code is: when you run the same code multiple times, it erases the previous data that is already present in newFile.txt and writes the data to it.

// In case you do not want the original data to get deleted and just want the new data to be added/appended at the end of the file, you need to make a little change in the above code by adding this "options object": {flag: 'a'} as the third parameter to writeFile() – like this:

fs.writeFile('./myFolder/newFile.txt', data, {flag: 'a'} , (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Written to file successfully');
    }
})

fs.readFile('./myFolder/newFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('File read successfully! Here is the data');
        console.log(data);
    }
})

// in order to use synchronous way
// have to use try catch in case if any error occurs
try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'myFileSync says Hi');
    console.log('Write operation successful');

    // Read file synchronously
    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log('Read operation successful. Here is the data:');
    console.log(fileData);

} catch(err){
    console.log('Error occurred!');
    console.log(err);
}

fs.readdir('./myFolder', (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory read successfully! Here are the files:');
    console.log(files);
})

// rename file
// fs.rename(oldPath, newPath, callback);
fs.rename('./myFolder/newFile.txt', './myFolder/newFileAsync.txt', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})

// delete file
fs.unlink('./myFolder/myFileSync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})