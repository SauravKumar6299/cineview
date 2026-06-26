import styled from 'styled-components'

export const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`