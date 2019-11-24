import styled from 'styled-components'

export const StyledCarousel = styled.div`
  .img-wrapper {
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .carousel-img,
  .gatsby-image-wrapper {
    position: absolute;
    border: 2px solid #fff;
    height: 100%;
    max-height: 330px;
    will-change: contents;
    @media (max-width: 1230px) {
      /* max-height: initial; */
    }
  }
`
