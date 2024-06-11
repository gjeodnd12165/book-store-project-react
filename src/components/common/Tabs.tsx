import React, { useState } from "react";
import styled from "styled-components"
import Title from "./Title";

interface TabProps {
  children: React.ReactNode;
  title: string;
}

function Tab({ children, title }: TabProps) {
  return (
    <>
      <Title size='medium' color='primary'>{title}</Title>
      {children}
    </>
  )
}

interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [activeIndex, setactiveIndex] = useState<number>(0);

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <TabsStyle>
      <div className="tab-header">
        {
          tabs.map((tab, index) => (
            <button 
            onClick={() => setactiveIndex(index)} 
            className={activeIndex === index ? "active" : ""}>
              {tab.props.title}
            </button>
          ))
        }
      </div>
      <div className="tab-content">
        {tabs[activeIndex]}
      </div>
    </TabsStyle>
  )
}

const TabsStyle = styled.div`
  .tab-header {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid #ddd;

    button {
      border: none;
      background: #ddd;
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.text};
      border-radius: ${({ theme }) => theme.borderRadius.default} ${({ theme }) => theme.borderRadius.default} 0 0;
      padding: 12px 24px;

      * &.active {
        color: #fff;
        background: ${({ theme }) => theme.color.primary}
      }
    }
  }

  .tab-content {
    padding: 24px 0;
  }
`;

export { Tabs, Tab }