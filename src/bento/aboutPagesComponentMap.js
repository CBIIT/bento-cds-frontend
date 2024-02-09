import GraphqlClient from "../components/GraphqlClient/GraphqlView";

const componentMapping = {
  GraphqlClient,
};

export const getComponent = (componentName) => {
  return componentMapping[componentName] || null;
};
