import { api_path, userIsLogin, localhost } from "./config";
import axios from "axios";
const fetchJoinDataAll = async () => {
  const resTeams = await axios.get(`${api_path}/teams?`);
  const teamDetail = resTeams.data;
  let id = 5;
  let count = 0;
  teamDetail.forEach((v) => {
    console.log(v.teamMerberId);
    let result = v.teamMerberId.find((v) => {
      return v === id;
    });
    if (result) {
      console.log(v.id);
      count += 1;
    }
  });
  console.log(count);
};

fetchJoinDataAll();
