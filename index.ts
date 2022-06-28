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
    "import/no-import-module-exports": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};

module.exports = config;
