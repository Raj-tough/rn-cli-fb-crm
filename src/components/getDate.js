export const getDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const fullDate = date + '-' + month + '-' + year;
  return fullDate;
};
