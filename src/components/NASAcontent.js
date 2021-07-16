import React from 'react';
import styled from 'styled-components';
import {Card, CardBody, CardTitle, CardText, CardHeader} from 'reactstrap';
import CardImage from './NASAimg';

function CardMain({copyright, date, explanation, title, url}) {
  return (
    <StyledCard>
      <Card className='card'>
        <CardHeader tag='h1'>NASA Picture of the Day!<span role="img" aria-label='go!'>🚀</span></CardHeader>
        <CardImage url={url} />
        <CardBody>
          <CardTitle tag='h2'>{title}</CardTitle>
          <CardText>{date}</CardText>
          <CardText>{explanation}</CardText>
          <CardText>
            <small tag='text-muted'>© {copyright}</small>
          </CardText>
        </CardBody>
      </Card>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 40px auto;
  width: 86%;
  .card {background-color: plum;}`;

export default CardMain;