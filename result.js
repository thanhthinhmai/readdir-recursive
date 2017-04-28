const fs = require('fs')
const dir = '/home/dom/Desktop/sum/folderA'
let count =1
getMainItem = (dir) => {
    let tab = '      '
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        console.log(tab.repeat(count)  + '\n' + tab.repeat(count) + '└───' + files[i]);
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            count++
            getMainItem(name)
            count--
        }
    }
}
getMainItem(dir);