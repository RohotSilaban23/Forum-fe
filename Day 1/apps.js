
const readline = require('readline');
const validate = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('siapa namamu?', (name) => {
    rl.question('berapa nomer hp mu??', (number) => {
        rl.question('Masukkan Emailmu', (email) => {
            if(validate.isMobilePhone(number, 'id-ID')){
                if(validate.isEmail(email)){
                    console.log(`nama : ${name}, nomor : ${number}, email : ${email}`)
                } else {
                    console.log("email yang anda Masukkan tidak Valid")
                }
            } else (
                console.log("nomer yang anda masukkan tidak valid")
            )
            rl.close()
        })
       
    })
    
})

