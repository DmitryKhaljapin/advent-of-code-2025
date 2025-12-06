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
    const ninesComplement = this._range - 1 - distance;
    this.currentPosition =
      (this.currentPosition + ninesComplement + 1 - this._range) % this._range;
  }
}

module.exports = Dial;
