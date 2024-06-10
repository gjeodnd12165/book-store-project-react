import { resetRequest, signin, signup } from "@/api/user.api";
import { SigninProps } from "@/pages/Signin";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";
import { ResetPasswordProps } from "@/pages/ResetPassword";
import { useState } from "react";

export const useAuth = () => {
  const { storeSignin } = useAuthStore();
  const [resetRequested, setResetRequested] = useState<boolean>(false);

  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const userSignin = (data: SigninProps) => {
    signin(data).then((res) => {
      storeSignin(res.token);
      showAlert('로그인이 완료되었습니다.');
      navigate('/');
    }, () => {
      showAlert('로그인이 실패했습니다.');
    });
  }

  const userSignup = (data: SignupProps) => {
    signup(data).then(() => {
      showAlert('회원가입이 완료되었습니다.');
      navigate('/users/login');
    });
  }

  const userResetPassword = (data: ResetPasswordProps) => {
    if (resetRequested) {
      showAlert('비밀번호가 초기화되었습니다.');
      navigate('/users/login');
    } else {
      resetRequest(data).then(() => {
        setResetRequested(true);
      })
    }
  }

  return { userSignin, userSignup, userResetPassword, resetRequested };
}