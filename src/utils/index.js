const getTimeDifference = (time) => {
  const HourDifference = Math.abs(
    new Date().getHours() - new Date(time).getHours()
  );
  const MinDifference = Math.abs(
    new Date().getMinutes() - new Date(time).getMinutes()
  );
  const SecDifference = Math.abs(
    new Date().getSeconds() - new Date(time).getSeconds()
  );

  let message = "";
  if (HourDifference !== 0) {
    message = `${HourDifference} Hour`;
  } else if (MinDifference !== 0) {
    message = message + `${MinDifference} Min`;
  } else {
    message = message + `${SecDifference} Second`;
  }
  message = message + " Ago";
  return message;
};

export { getTimeDifference };
