import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default_user",
});

export default UserContext;
