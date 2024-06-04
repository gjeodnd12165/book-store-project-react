import { useState } from 'react'
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { resetRequest } from '../api/user.api';
import { useAlert } from '../hooks/useAlert';
import { SignupStyle } from './Signup';

export interface ResetPasswordProps {
  email: string;
  password: string;
}

function ResetPassword() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [resetRequested, setResetRequested] = useState(false);

  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<ResetPasswordProps>();

  const onSubmit = (data: ResetPasswordProps) => {
    if (resetRequested) {
      showAlert('비밀번호가 초기화되었습니다.');
      navigate('/users/login');
    } else {
      resetRequest(data).then(() => {
        setResetRequested(true);
      })
    }
  }

  return (
    <>
      <Title size='large'>비밀번호 초기화</Title>
      <ResetPasswordStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
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