export function encodeSubjectIds(subjectIdsArray) {
  const autocompleteArray = subjectIdsArray.map((subjectId) => {
    return {
      "type": "subjectIds",
      "title": subjectId,
    }
  });
  
  return encodeURIComponent(JSON.stringify({"autocomplete": autocompleteArray}));
}