const { validate } = require("schema-utils");
const schema = require("./options.json");

module.exports = function loader(source) {
  const { version, webpack } = this;
  const options = this.getOptions();

  validate(schema, options, "Loader");

  const newSource = `/**
  * Loader API Version: ${version}
  * Is this in "webpack mode": ${webpack}
  */
 /**
  * Original Source From Loader
  */
 ${source}`;

  return newSource;
};
