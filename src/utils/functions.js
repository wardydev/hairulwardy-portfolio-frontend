function formatDate(date) {
  return date.toLocaleDateString("en-US");
}

function getFullYearFromDate(date) {
  return date.getFullYear("en-US");
}

function formatSlug(str) {
  return str.toLowerCase().split(" ").join("-");
}

function formatDateToLocalstring(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export { formatDate, getFullYearFromDate, formatSlug, formatDateToLocalstring };
