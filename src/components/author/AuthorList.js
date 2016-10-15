import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>first Name</th>
        <th>last Name</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorListRow key={author.id} author={author}/>
      )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
