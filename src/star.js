class Star {
  #lifetime
  #position

  constructor(position, lifetime) {
    this.#lifetime = lifetime;
    this.#position = position;
  }

  updateLifetime() {
    this.#lifetime--;
  }

  get position() {
    return this.#position;
  }

  get life() {
    return this.#lifetime;
  }

  #isAlive() {
    return this.#lifetime >= 0;
  }

  get icon() {
    if (!this.#isAlive()) {
      return "  ";
    }

    if (this.#lifetime <= 3) return "✨";
    if (this.#lifetime <= 6) return "⭐️";

    return "🌟";
  }

}

exports.Star = Star;