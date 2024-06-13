import Banner from "@/components/common/banner/Banner";
import Title from "@/components/common/Title";
import MainBestBooks from "@/components/main/MainBestBooks";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainReviews from "@/components/main/MainReviews"
import { useMain } from "@/hooks/useMain"
import { useMediaQuery } from "@/hooks/useMediaQuery";
import styled from "styled-components";


function Home() {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  const { isMobile } = useMediaQuery();

  return (
    <HomeStyle>
      <Banner banners={banners} />
      <section className="section">
        <Title size="medium" color="primary">
          베스트셀러
        </Title>
        <MainBestBooks books={bestBooks} />
      </section>
      <section className="section">
        <Title size="medium" color="primary">
          신간
        </Title>
        <MainNewBooks books={newBooks} />
      </section>
      <section className="section">
        <Title size="medium" color="primary">
          리뷰
        </Title>
        <MainReviews reviews={reviews} />
      </section>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export default Home