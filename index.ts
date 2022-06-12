/* eslint-disable import/no-import-module-exports */
import { Linter } from "eslint";
import BaseConfig = Linter.BaseConfig;

const config: BaseConfig = {
  extends: ["pythoncoderas-typescript", "pythoncoderas"],
  rules: {
    "import/extensions": "off",
    "no-negated-condition": "off",
    "no-restricted-syntax": "off",
    "no-warning-comments": "off",
  },
};

module.exports = config;
