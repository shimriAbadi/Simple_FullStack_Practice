//jshint esversion:6

const fs = require('fs')

fs.writeFileSync("file1.txt","The user as tpye some information into the file by using NodeJs")

fs.copyFileSync("file1.txt","file2.txt")

let printredir = fs.readdirSync('./')
console.log(printredir)

for(let i=0; i<printredir.length; i++){
    for(let j=0; j<printredir[i].length;j++)
    {
        if(printredir[i][j] == '.' && printredir[i][j+1] == 't' && printredir[i][j+2] == 'x' && printredir[i][j+3] == 't' ){
            fs.writeFileSync(printredir[i],`Got ya bitch you are in index ${i} and your name is ${printredir[i]}.... bye bye for now!`)
        }else if(printredir[i][j] == '.'){

            let str='';
            do{                

                str+=[printredir[i][j+1]]
                j++

            }
            while(j < printredir[i].length);
            console.log(`There is also an -----${str.toUpperCase()}------ file and his name is ${printredir[i]}`)
        }
    }
}