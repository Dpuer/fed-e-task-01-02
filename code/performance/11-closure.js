function test (fnc) {
    console.log(fnc())
}

function test2 () {
    var name = 'lg'
    return name
}

test(function() {
    var name = 'lg'
    return name
})

test(test2)