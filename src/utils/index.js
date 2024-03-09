const getTimeDifference = (time) => {
  const now = new Date().getHours();
  const createAt = new Date(time).getHours;

  console.log("now Hour ", now, " created At ", createAt);
};

export { getTimeDifference };
