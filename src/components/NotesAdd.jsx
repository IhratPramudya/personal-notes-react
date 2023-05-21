/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import NotesAction from './NotesAction';

class NotesAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => ({
      title: event.target.value,
    }));
  }

  onBodyChangeHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form action="" onSubmit={this.onSubmitEventHandler}>
        <div className="add-new-page__input">

          <input className="add-new-page__input__title" value={this.state.title} placeholder="CatatanRahasia" onChange={this.onTitleChangeHandler} />

          <textarea className="add-new-page__input__body" value={this.state.body} placeholder="Saya Sebenarnya..." onChange={this.onBodyChangeHandler}>

          </textarea>
        </div>
        <NotesAction />
      </form>
    );
  }
}

NotesAdd.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesAdd;
