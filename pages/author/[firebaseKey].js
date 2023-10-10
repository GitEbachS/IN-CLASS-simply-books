import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const getADetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getADetails();
  }, []);

  return (
    <div>{authorDetails.books?.map((book) => (
      <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getADetails} />
    ))}
    </div>
  );
}
