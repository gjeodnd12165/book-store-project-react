import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signin } from '../api/user.api';
import { useAlert } from '../hooks/useAlert';
import { SignupStyle } from './Signup';
import { useAuthStore } from '../store/authStore';

export interface SigninProps {
  email: string;
  password: string;
}

function Signin() {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const { storeSignin } = useAuthStore();

  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<SigninProps>();

  const onSubmit = (data: SigninProps) => {
    signin(data).then((res) => {
      storeSignin(res.token);
      showAlert('로그인이 완료되었습니다.');
      navigate('/');
    }, () => {
      showAlert('로그인이 실패했습니다.');
    });
  }

  return (
    <>
      <Title size='large'>로그인</Title>
      <SigninStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText 
            placeholder='이메일' 
            inputType='email' 
            {...register('email', { required: true })}/>
            {errors.email && <p
            className='error-text'>이메일을 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <InputText 
            placeholder='비밀번호' 
            inputType='password' 
            {...register('password', { required: true })}/>
            {errors.password && <p
            className='error-text'>비밀번호를 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <Button size='medium' schema='primary' type='submit'>회원가입</Button>
          </fieldset>
          <div className="info">
            <Link to='/users/reset'>비밀번호 초기화</Link>
          </div>
        </form>
      </SigninStyle>
    </>
  )
}

export const SigninStyle = SignupStyle;

export default Signin