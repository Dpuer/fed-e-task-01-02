var arrList = []

arrList[10000] = 'icoder'

for (let index = 0; index < arrList.length; index++) {
    console.log(arrList[index])
}

for (let index = arrList.length; index; index--) {
    console.log(arrList[index])
}