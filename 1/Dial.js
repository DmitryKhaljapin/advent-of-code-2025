class Dial {
  _range;
  currentPosition;

  constructor(range, currentPosition) {
    this._range = range;
    this.currentPosition = currentPosition;
  }

  rotateRight(distance) {
    this.currentPosition = (this.currentPosition + distance) % this._range;
  }

  rotateLeft(distance) {
    const tmpPosition = (this.currentPosition - distance) % this._range;
    if (tmpPosition < 0) {
      this.currentPosition = this._range + tmpPosition;
    } else {
      this.currentPosition = tmpPosition;
    }
  }
}

module.exports = Dial;
