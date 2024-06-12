import { IBanner } from "@/model/banner.model";
import styled from "styled-components"
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  banners: IBanner[];
}

function Banner({ banners }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const transformValue = useMemo(() => {
    return currentIndex * -100;
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  }
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  }
  const handleClickIndicator = (index: number) => () => {
    setCurrentIndex(index);
  }

  return (
    <BannerStyle>
      <BannerContainerStyle $transformValue={transformValue}>
        {banners.map((banner) => (
          <BannerItem banner={banner} />
        ))}
      </BannerContainerStyle>
      <BannerButtonStyle>
        <button className="prev" onClick={handlePrev}><FaArrowLeft /></button>
        <button className="next" onClick={handleNext}><FaArrowRight /></button>
      </BannerButtonStyle>
      <BannerIndicatorStyle>
        {banners.map((_, index) => (
          <span 
          onClick={handleClickIndicator(index)}
          className={index === currentIndex ? 'active' : ''}></span>
        ))}
      </BannerIndicatorStyle>
    </BannerStyle>
  )
}

const BannerStyle = styled.div`
  overflow: hidden;
  position: relative;
`;

interface BannerContainerStyleProps {
  $transformValue: number;
}

const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
  display: flex;
  transform: translateX(${(props) => props.$transformValue}%);
  transition: transform 0.5s ease-in-out;
`;

const BannerButtonStyle = styled.div`
  button {
    border: 0;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, .5);
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: #fff;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const BannerIndicatorStyle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    margin: 0 4px;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.color.primary}
    }
  }
`;

export default Banner