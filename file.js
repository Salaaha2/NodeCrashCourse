const { error } = require('console')
const fs = require('fs')

// read
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('last line')

// write
// fs.writeFile('./docs/blog2.txt', 'Hello, Alykaa', () => {
//     console.log('File was writen')
// })
// fs.writeFile('./docs/blog2.txt', 'Hello, again', () => {
//     console.log('File was writen')
// })



// directories
if (fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder deleted')
    })
}


// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}