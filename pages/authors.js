import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  });

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
      ))}
    </div>
  );
}
