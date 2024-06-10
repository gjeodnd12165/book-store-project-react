import styled from "styled-components"

function Snippet() {
  return (
    <SnippetStyle>
      Snippet
    </SnippetStyle>
  )
}

const SnippetStyle = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius}
`;

export default Snippet