export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mappedArray;
};

export const replaceMongoIdInObject = (object) => {
  const { _id, ...rest } = object;
  return {
    id: _id.toString(),
    ...rest,
  };
};
