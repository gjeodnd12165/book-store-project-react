import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"

interface Props {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  isOpen?: boolean;
}

function Dropdown({ children, toggleButton, isOpen = false }: Props) {
  const [open, setOpen] = useState<boolean>(isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownStyle $open={open} ref={dropdownRef}>
      <button className="toggle" onClick={() => setOpen(!open)}>
        {toggleButton}
      </button>
      {open && <div className="panel">{children}</div>}
    </DropdownStyle>
  )
}

interface DropdownStyleProps {
  $open: boolean;
}

const DropdownStyle = styled.div<DropdownStyleProps>`
  position: relative;

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;

    svg {
      width: 30px;
      height: 30px;
      fill: ${({ theme, $open }) => $open ? theme.color.primary : theme.color.secondary}
    }
  }

  .panel {
    position: absolute;
    top: 40px;
    right: 0;
    padding: 16px;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.default};
    z-index: 100;
  }
`;

export default Dropdown