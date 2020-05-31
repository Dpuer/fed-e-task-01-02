var arrList = new Array(1, 2, 3, 4, 5)

arrList.forEach(item => console.log(item))

for (var i = arrList.length; i; i--) {
    console.log(arrList[i])
}

for (const i in arrList) {
    console.log(arrList[i])
}