import { useTimeout } from "@/hooks/useTimeout";
import useToastStore, { IToast } from "@/store/toastStore";
import { useState } from "react";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import styled from "styled-components"

export const TOAST_REMOVE_DELAY = 3000; // ms

interface Props extends IToast {}

function Toast({ id, message, type }: Props) {
  const removeToast = useToastStore((state) => state.removeToast);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  
  const handleRemoveToast = () => {
    setIsFadingOut(true);
  }

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      removeToast(id);
      setIsFadingOut(false);
    }
  }

  useTimeout(handleRemoveToast, TOAST_REMOVE_DELAY);
  
  return (
    <ToastStyle 
    className={isFadingOut ? 'fade-out' : 'fade-in'}
    onAnimationEnd={handleAnimationEnd}>
      {type === 'info' && <FaInfoCircle />}
      {type === 'error' && <FaBan />}
      <p>{message}</p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </ToastStyle>
  )
}

const ToastStyle = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-in {
    animation: fade-in 0.5s ease-in-out forwards;
  }

  &.fade-out {
    animation: fade-out 0.5s ease-in-out forwards;
  }
  

  background-color: ${({ theme }) => theme.color.background};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  p {
    color: ${({ theme }) => theme.color.text};
    line-height: 1;
    margin: 0;
    flex: 1;

    display: flex;
    align-items: end;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    svg {
      transform: rotate(45deg);
    }
  }
`;

export default Toast