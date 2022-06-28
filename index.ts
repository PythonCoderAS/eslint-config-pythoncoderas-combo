import { Linter } from "eslint";
import BaseConfig = Linter.BaseConfig;

const config: BaseConfig = {
  extends: ["pythoncoderas-typescript", "pythoncoderas"],
  rules: {
    "import/extensions": "off",
    "no-negated-condition": "off",
    "no-restricted-syntax": "off",
    "no-warning-comments": "off",
    "no-undef": "off",
    "import/no-mutable-exports": "off",
  },
};

module.exports = config;
