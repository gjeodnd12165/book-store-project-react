import { IBanner } from "@/model/banner.model";
import styled from "styled-components"

interface Props {
  banner: IBanner;
}

function BannerItem({ banner }: Props) {
  return (
    <BannerItemStyle>
      <div className="img">
        <img src={banner.image} alt={banner.description} />
      </div>
      <div className="content">
        <h2>{banner.title}</h2>
        <p>{banner.description}</p>
      </div>
    </BannerItemStyle>
  )
}

const BannerItemStyle = styled.div`
  flex: 0 0 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  .img {
    img {
      width: 100%;
      max-width: 100%;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 100%);
  
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: ${({ theme }) => theme.color.primary};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.text};
      margin: 0;
    }
  }
`;

export default BannerItem