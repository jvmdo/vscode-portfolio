import data from "./documents.json";

export const getDocuments = () => {
  return data;
};

export default (req, res) => {
  const documents = getDocuments();

  console.log(documents);
  res.json(documents);
};
