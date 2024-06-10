import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { SignupStyle } from './Signup';
import { useAuth } from '@/hooks/useAuth';

export interface ResetPasswordProps {
  email: string;
  password: string;
}

function ResetPassword() {
  const { userResetPassword, resetRequested } = useAuth();

  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<ResetPasswordProps>();

  return (
    <>
      <Title size='large'>비밀번호 초기화</Title>
      <ResetPasswordStyle>
        <form onSubmit={handleSubmit(userResetPassword)}>
          <fieldset>
            <InputText 
            placeholder='이메일' 
            inputType='email' 
            {...register('email', { required: true })}/>
            {errors.email && <p
            className='error-text'>이메일을 입력해주세요.</p>}
          </fieldset>
          {
            resetRequested ? 
            <fieldset>
              <InputText 
              placeholder='비밀번호' 
              inputType='password' 
              {...register('password', { required: true })}/>
              {errors.password && <p
              className='error-text'>비밀번호를 입력해주세요.</p>}
            </fieldset> :
            null
          }
          <fieldset>
            <Button 
            size='medium' 
            schema='primary' 
            type='submit'>
              {resetRequested ? '비밀번호 초기화' : '초기화 요청'}
            </Button>
          </fieldset>
        </form>
      </ResetPasswordStyle>
    </>
  )
}

const ResetPasswordStyle = SignupStyle;

export default ResetPassword