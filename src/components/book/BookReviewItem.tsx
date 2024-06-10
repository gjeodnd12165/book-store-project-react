import { IBookReviewItem } from "@/model/book.model";
import { formatDate } from "@/utils/format";
import { FaStar } from "react-icons/fa";
import styled from "styled-components"

interface Props {
  review: IBookReviewItem;
}

const Star = (props: Pick<IBookReviewItem, 'score'>) => {
  return (
    <span className="star">
      <span className="star-on">
        {
          Array.from({ length: props.score }, (_, index) =>(
            <FaStar key={index}/>
          ))
        }
      </span>
      <span className="star-off">
        {
          Array.from({ length: 5-props.score }, (_, index) =>(
            <FaStar key={length+index}/>
          ))
        }
      </span>
    </span>
  )
}

function BookReviewItem({ review }: Props) {
  return (
    <BookReviewItemStyle>
      <header className="header">
        <div>
          <span>
            {review.userName}
          </span>
          <span>
            <Star score={review.score} />
          </span>
        </div>
        <div>
          {formatDate(review.createdAt)}
        </div>
      </header>
      <div className="content">
        <p>
          {review.content}
        </p>
      </div>
    </BookReviewItemStyle>
  )
}

const BookReviewItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  :hover {
    
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color.secondary};
    padding: 0;

    .star {
      padding: 0 0 0 8px;
        .star-on {
        padding: 0;
        svg {
          fill: ${({ theme }) => theme.color.primary}
        }
      }

      .star-off {
        padding: 0;
        svg {
          fill: ${({ theme }) => theme.color.secondary}
        }
      }
    }
  }

  .content {
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

export default BookReviewItem