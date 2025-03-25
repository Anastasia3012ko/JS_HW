function  waitForTime(s) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Ожидание завершено')
        },s)
    })
}
waitForTime(3000).then(resolve=>console.log(resolve))
waitForTime(3000).catch(reject => console.error(reject))