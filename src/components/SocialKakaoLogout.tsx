import axios from "axios";
import { useKakaoUserStore } from "../actions/useKakaoUserStore";

const SocialKakaoLogout = () => {
  const { user, logoutUser } = useKakaoUserStore();

  const logoutHandler = () => {
    if (user) {
      logoutUser();
    }
  };
  return (
    <div>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
};

export default SocialKakaoLogout;
