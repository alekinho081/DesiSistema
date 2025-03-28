const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}
const book1 = getBook(1)
const book2 = getBook(2)
const book3 = getBook(3)
const book4 = getBook(4)
const book5 = getBook(5)


// const {title, author} = book3

// console.log(title, author)

// const {genres} = book5
// const primeiroGenero = genres[0]

// console.log(primeiroGenero)

// const {reviews} = book4
// const {goodreads, librarything} = reviews
// console.log(goodreads, librarything)


// const book2Copy = book2
// book2Copy

// function updateBookPages(id, newPages){
//     const bookCopy = getBook(id)
//     bookCopy.pages = newPages
//     return bookCopy
// }

function updateBookPages(id, newPages, reviews){
    const bookCopy = getBook(id)
    
    return {
        ...bookCopy,
        pages: newPages,
        reviews: reviews
    }
}
const revista = {
    goodreads: {
        rating: 3.44,
        ratingsCount: 22955233,
        reviewsCount: 596058,
    },
    librarything: {
        rating: 5,
        ratingsCount: 383458,
        reviewsCount: 10975,
    },
}

console.log(updateBookPages(5, 300, revista))

const {title, publicationDate} = book1
let formataTitle = title, formataPubli = publicationDate

console.log(formataTitle + ' ' +formataPubli)

function exibirLivro(id){
    const book = getBook(id)
    const {title, author, publicationDate} = book
    return `O livro ${title} foi escrito por ${author} e publicado em ${publicationDate}`
}

console.log(exibirLivro(1))

function exibirLivros(id){
    const book = getBook(id)
    const {title, author, pages} = book
    return `O livro ${title} foi escrito por ${author} e tem ${pages} páginas`
}


function exibirLista(quantidadeLivros){
    let livros = ''
    for(i=1 ;i<quantidadeLivros;i++){
        livros+= exibirLivros(i).toString()+'\n'
    }
    return livros
}

console.log(exibirLista(5))

let hasMovie
if(book5.hasMovieAdaptation){
    hasMovie = true
}else{
    hasMovie = false
}

console.log(hasMovie)

function checkMovie(id){
    let book = getBook(id)
    return book.hasMovieAdaptation ? 'Este filme tem adaptação' : 'Este filme não tem adaptação'
}

console.log(checkMovie(5))

function listMovies(){
    const books = getBooks()
    let booksBool = []
    let livros = ''
    books.forEach((e) => {
        booksBool.push(e.hasMovieAdaptation)
    })
    booksBool.forEach((e) => {
        if(e){
            livros+= exibirLivros(i).toString() + '🎬\n'
        }else{
            livros+= exibirLivros(i).toString() + '📖\n'
        }
    })
    return livros
}

console.log(listMovies())