import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) => {
  return (
    <tr>
      <td>{author.id}</td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorListRow;
