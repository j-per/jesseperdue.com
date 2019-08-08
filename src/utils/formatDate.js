const formatDate = ISOString => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const newDate = new Date(ISOString);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const dt = newDate.getDate();
  return `${months[month - 1]} ${dt}, ${year}`;
};

export default formatDate;
