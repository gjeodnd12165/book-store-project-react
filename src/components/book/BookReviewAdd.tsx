import { TBookReviewItemWrite } from "@/model/book.model";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import Button from "../common/Button";

interface Props {
  onAdd: (data: TBookReviewItemWrite) => void;
}

function BookReviewAdd({ onAdd }: Props) {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<TBookReviewItemWrite>();

  
  return (
    <BookReviewAddStyle>
      <form onSubmit={handleSubmit(onAdd)}>
        <fieldset>
          <textarea {...register('content', { required: true })}></textarea>
        </fieldset>
        {errors.content && <p className="error-text">내용을 입력해주세요</p>}
        <fieldset>
          <div className="control">
            <select {...register('score', { required: true, valueAsNumber: true })}>
              {Array.from({ length: 5 }, (_, index) => (
                <option value={index+1}>{index+1}점</option>
              ))}
            </select>
            <Button size="medium" schema="primary">
              작성하기
            </Button>
          </div>
        </fieldset>
      </form>
    </BookReviewAddStyle>
  )
}

const BookReviewAddStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 12px;
      justify-content: end;
    }

    .error-text {
      color: red;
      margin: 0;
    }

    textarea {
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      border: 1px solid ${({ theme }) => theme.color.border};
      padding: 12px;
    }
  }
`;

export default BookReviewAdd