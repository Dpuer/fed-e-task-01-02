let fn = function () {
    console.log('Hello')
}
fn()

const Views = {
    index(posts) { console.log('index', posts) },
    show (post) { console.log('show', post) }
}

// const BlogController = {
//     index(posts) { return Views.index(posts) },
//     show (post) { return View.show(post) }
// }

const BlogController = {
    index: Views.index,
    show: Views.show
}

BlogController.index('lmm')