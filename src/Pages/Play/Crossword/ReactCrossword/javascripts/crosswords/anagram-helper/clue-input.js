import React, { Component } from "react";

class ClueInput extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    const el = this.ref.current;

    if (el) {
      el.focus();
    }
  }

  componentDidUpdate() {
    const el = this.ref.current;

    // focus on reset
    if (this.props.value === "" && el) {
      el.focus();
    }
  }

  onInputChange(e) {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    this.props.onChange(e.target.value.toLowerCase());
  }

  onKeyDown(e) {
    const el = this.ref.current;

    if (e.keyCode === 13 && el) {
      el.blur();
      this.props.onEnter();
    }
  }

  render() {
    return (
      <input
        ref={this.ref}
        type="text"
        className="crossword__anagram-helper__clue-input"
        placeholder="Enter letters"
        maxLength={this.props.clue.length}
        value={this.props.value}
        onChange={this.onInputChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }
}

export { ClueInput };
