// Use Axios to fetch data from API
import axios from "axios";

// Declare Random User Generator API url as baseurl
const BASEURL = "https://randomuser.me/api/?results=50&inc=name,email,dob,picture,phone&nat=ca";

// Export data from url
export default {
  generate: function() {
    return axios.get(BASEURL);
  }
};
