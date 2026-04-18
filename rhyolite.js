class Rhyolite {
  constructor(silicaContent, color) {
    this.silicaContent = silicaContent;
    this.color = color;
  }

  describe() {
    console.log(`Rhyolite has ${this.silicaContent}% silica and is typically ${this.color}.`);
  }
}

module.exports = Rhyolite;
