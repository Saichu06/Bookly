import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
const BooksCardSingle = ({book}) => {
  return (
    <div>
      <div
          key={book._id}
          className='border-2 border-gray-500 rounded-xl p-4 hover:shadow-xl'
        >
          <h2 className='text-xl font-bold'>{book.title}</h2>

          <p className='text-gray-600 mt-2'>
            Author: {book.author}
          </p>

          <p className='text-gray-600'>
            Publish Year: {book.publishYear}
          </p>

          <div className='flex justify-between mt-4'>
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className='text-2xl text-green-700' />
            </Link>

            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-2xl text-yellow-600' />
            </Link>

            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className='text-2xl text-red-600' />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default BooksCardSingle
