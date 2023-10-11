import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ authorObj }) {
  const router = useRouter();
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => router.push('/'));
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={authorObj.image} alt={authorObj.image} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{`${authorObj.first_name} ${authorObj.last_name}`}</Card.Title>
        <p className="card-text bold">{authorObj.favorite ? ' 🤍' : ''}</p>
        <h6 className="card-subtitle mb-2 text-muted">{authorObj.email}</h6>
        {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE AUTHOR DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    image: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
