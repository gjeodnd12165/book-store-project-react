import styled from 'styled-components'
import { IPagination } from '@/model/pagination.model';
import { LIST_NUM } from '@/constants/pagination';
import Button from '../common/Button';
import { QUERYSTRING } from '@/constants/querystring';
import { useSearchParams } from 'react-router-dom';

interface Props {
  pagination: IPagination;
}

function Pagination({ pagination }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalBooks, currentPage } = pagination;
  const pages: number = Math.ceil(totalBooks / LIST_NUM);

  const handleClickPage = (page: number) => () => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  }
  
  return (
    <PagenationStyle>
      {
        pages > 0 && (
          <ol>
            {
              Array(pages).fill(0).map((_, index) => (
                <li key={index}>
                  <Button 
                  onClick={handleClickPage(index+1)}
                  size='small' 
                  schema={index+1 === currentPage ? 'primary' : 'normal'}>
                    {index + 1}
                  </Button>
                </li>
              ))
            }
          </ol>
        )
      }
    </PagenationStyle>
  )
}

const PagenationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px;

  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
`

export default Pagination