import { reactive } from 'vue'

export const store = reactive({
  books: [
    {
      id: 1,
      title: 'Dune',
      author: 'Frank Herbert',
      year: 1965,
      genre: 'Science-Fiction',
      isFav: true,
      keywords: ['espace', 'épice', 'désert']
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      year: 2008,
      genre: 'Informatique',
      isFav: true,
      keywords: ['programmation', 'architecture']
    },
    {
      id: 3,
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      year: 1954,
      genre: 'Fantasy',
      isFav: false,
      keywords: ['aventure', 'anneau']
    }
  ],
  toggleFav(id) {
    const book = this.books.find(b => b.id === id)
    if (book) {
      book.isFav = !book.isFav
    }
  },
  deleteBook(id) {
    this.books = this.books.filter(b => b.id !== id)
  }
})