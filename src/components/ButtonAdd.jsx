/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ButtonAdd() {
  return <Link to="/notes/new"><button className="action" type="button" title="tambah"><FiPlusCircle /></button></Link>;
}

export default ButtonAdd;
