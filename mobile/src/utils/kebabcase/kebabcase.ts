import _ from "lodash";

const setKebabCase = (value: string): string => {
  return _.kebabCase(value);
};

export default setKebabCase;
