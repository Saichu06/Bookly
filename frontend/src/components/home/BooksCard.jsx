import BooksCardSingle from "./BooksCardSingle";

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {books.map((book) => (
        <BooksCardSingle key={book._id} book={book}/>
      ))}
    </div>
  );
};

export default BooksCard;