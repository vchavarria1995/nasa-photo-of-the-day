import React, {useState} from 'react';
import styled from 'styled-components';
import {CardImg,} from 'reactstrap';

export default function CardImage({ url }) {
  return (
    <StyledCardImg>
      <CardImg
        className='fullimg'
        top
        width='97%'
        src={url}
        alt='NASA Photo of the Day'
      />
    </StyledCardImg>
  );
}

const StyledCardImg = styled.div`
  .fullimg {
    padding: 7px;
    position: relative;
    text-align: center;
    display: flex;
  }`;