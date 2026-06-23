import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 inset-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[600px] max-w-full h-fit bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />

        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>

        <h4 className='my-2 text-gray-500'>
          {book._id}
        </h4>

        <h2 className='text-2xl font-semibold'>
          {book.title}
        </h2>

        <p className='text-lg mt-2'>
          {book.author}
        </p>

        <div className='mt-4'>
          <h4 className='font-semibold'>
            Book Details
          </h4>

          <p className='mt-2 text-gray-600'>
            Created At:
          </p>

          <p>{new Date(book.createdAt).toLocaleString()}</p>

          <p className='mt-2 text-gray-600'>
            Updated At:
          </p>

          <p>{new Date(book.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;