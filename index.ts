/* eslint-disable import/no-import-module-exports */
import { Linter } from "eslint";
import BaseConfig = Linter.BaseConfig;

const config: BaseConfig = {
  extends: ["pythoncoderas-typescript", "pythoncoderas"],
  rules: {
    "import/extensions": "off",
    "no-negated-condition": "off",

  },
};

module.exports = config;
