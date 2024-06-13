// import React from 'react'
import { styled } from 'styled-components';
import logo from '@/assets/react.svg';
import { FaSignInAlt, FaRegUser, FaUserCircle, FaBars, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '@/hooks/useCategory';
import { useAuthStore } from '@/store/authStore';
import Dropdown from './Dropdown';
import ThemeSwitcher from './header/ThemeSwitcher';
import { useState } from 'react';

function Header() {
  const { category } = useCategory();
  const { isSignedIn, storeSignout } = useAuthStore();
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <HeaderStyle $isMobileOpen={isMobileOpen}>
      <h1 className='logo'>
        <Link to='/'>
          <img src={logo} alt='book store'/>
        </Link>
      </h1>
      <button className="menu-button" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaAngleRight /> : <FaBars />}
      </button>
      <nav className='category'>
        <ul>
          {
            category.map((item) => (
              <li key={item.id}>
                <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className='auth'>
        <Dropdown toggleButton={<FaUserCircle />}>
          <>
            {
              isSignedIn && (
                <ul>
                  <li>
                    <Link to='/cart'>장바구니</Link>
                  </li>
                  <li>
                    <Link to='/orderlist'>주문 내역</Link>
                  </li>
                  <li>
                    <button onClick={storeSignout}>로그아웃</button>
                  </li>
                </ul>
            )}
            {!isSignedIn && (
              <ul>
                <li>
                  <Link to='/users/signin'>
                    <FaSignInAlt />
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to='/users/signup'>
                    <FaRegUser />
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
            <ThemeSwitcher />
          </>
        </Dropdown>
      </nav>
    </HeaderStyle>
  )
}

interface HeaderStyleProps {
  $isMobileOpen: boolean;
}

const HeaderStyle = styled.header<HeaderStyleProps>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    height: 30px;
    transform: translateY(-15px);
    img {
      height: 100%;
    }
  }

  .menu-button {
    display: none;
  }

  .category {

    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100px;
      li {
        a,
        button {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }

  @media screen AND ${({ theme }) => (theme.mediaQuery.mobile)} {
    height: 52px;

    .logo {
      padding: 0 0 0 12px;

      img {
        width: 140px;
      }
    }

    .auth {
      position: absolute;
      top: 12px;
      right: 12px;
    }

    .menu-button {
      display: flex;
      position: absolute;
      top: 12px;
      right: ${({ $isMobileOpen }) => ($isMobileOpen ? '60%' : '52px')};
      transition: right 0.3s ease-in-out;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
    }

    .category {
      position: absolute;
      top: 12px;
      right: 56px;


      ul {
        position: fixed;
        top: 0;
        right: ${({ $isMobileOpen }) => $isMobileOpen ? '0' : '-100%'};
        width: 60%;
        height: 100vh;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: right 0.3s ease-in-out;

        margin: 0;
        padding: 24px;
        z-index: 1000;

        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

export default Header;