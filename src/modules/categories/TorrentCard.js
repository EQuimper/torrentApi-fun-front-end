import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TorrentCard = ({ title }) => (
  <Card>
    <CardHeader
      title={title}
    />
  </Card>
);

export default TorrentCard;
