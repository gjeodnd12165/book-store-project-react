import styled from 'styled-components'
import { useCategory } from '@/hooks/useCategory'
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '@/constants/querystring';

function BooksFilter() {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    }

    setSearchParams(newSearchParams);
  }

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get(QUERYSTRING.RECENT_DAYS)) {
      newSearchParams.delete(QUERYSTRING.RECENT_DAYS);
    } else {
      newSearchParams.set(QUERYSTRING.RECENT_DAYS, '30');
    }

    setSearchParams(newSearchParams);
  }
  
  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button 
          onClick={handleCategory(item.id)}
          size='medium' 
          schema={item.isActive ? 'primary' : 'normal'}
          key={item.id}>
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button 
        onClick={handleNews}
        size='medium' 
        schema={searchParams.get(QUERYSTRING.RECENT_DAYS) ? 'primary' : 'normal'}>
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  )
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`

export default BooksFilter