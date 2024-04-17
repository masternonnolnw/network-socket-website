import axios, { AxiosResponse } from "axios";
import { baseApiURL } from "common/const";
import { IUser, Role } from "./types";

interface getUserProfileProp {
  token: string;
}
export const getUserProfile = async (
  props: getUserProfileProp
): Promise<IUser | null> => {
  const { token } = props;
  // console.log(`${baseApiURL}/auth/me`);
  // axios
  // .get(`${baseApiURL}/auth/me`, {
  //   headers: {
  //     Authorization: `Bearer ${username}`
  //   }
  // })
  //   .then((res) => {
  //     console.log(res);
  //   });student
  // };
  let res: AxiosResponse;
  try {
    res = await axios.get(`${baseApiURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // apiClient.get<UserDTO>("/auth/me");
  } catch (err) {
    return null;
  }

  const user = transformUserDTOtoIUser(res.data);
  return user;
};
function transformUserDTOtoIUser(user: UserDTO) {
  return {
    name: user.name,
    userId: String(user.id),
    role: String(user.role) == "STUDENT" ? Role.student : Role.instructor
  };
}
export interface UserDTO {
  name: string;
  id: Number;
  role: DTORole;
}
enum DTORole {
  STUDENT,
  TEACHER,
  ADMIN
}
