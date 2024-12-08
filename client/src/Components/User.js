import { Label } from "reactstrap";
import userImage from "../Images/user.png"; // Import a default user image
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store
import * as ENV from "../config";

const User = (userData) => {
  // Access the user data from the Redux store
  //const user = useSelector((state) => state.users.user);
  const user = userData.userData;
  var picURL = "";
  // Check if the user has a profile picture
  if (user.profilePic !== "user.png") {
    // Construct the URL for the user's profile picture
    picURL = ENV.SERVER_URL + "/uploads/" + user.profilePic;
  } else {
    // Use the default user image if no profile picture is available
    picURL = userImage;
  }

  return (
    <div>
      <img src={picURL} className="userImage center" alt="User" />
      <p className="userInfos">
        <Label>{user.name}</Label>
        <br />
        <span className="smalltext">{user.email}</span>
      </p>
    </div>
  );
};

export default User;
