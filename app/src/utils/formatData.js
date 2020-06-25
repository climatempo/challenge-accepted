import moment from "moment";

function formatData(data) {
  data = moment(data, "YYYY-MM-DD");
  return data.format("DD/MM/YYYY");
}

export default formatData;
