import KakaoLogin from "react-kakao-login";
import { useKakaoUserStore } from "../actions/useKakaoUserStore";

const SocialKakaoLogin = () => {
  const { setUser } = useKakaoUserStore();
  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
    setUser(data.profile);
  };
  const kakaoOnFailure = (error: KakaoError) => {
    console.log(error.error_description);
  };
  return (
    <div>
      <KakaoLogin
        token={import.meta.env.VITE_KAKAO_JS_KEY}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </div>
  );
};

export default SocialKakaoLogin;
