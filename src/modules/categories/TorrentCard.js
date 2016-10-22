import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TorrentCard = ({ title, colorHeader }) => (
  <Card style={styles.cardView}>
    <CardHeader
      title={title}
      style={{ backgroundColor: colorHeader }}
    />
  </Card>
);

const styles = {
  cardView: {
    display: 'flex',
    width: '32%',
    height: '300px',
    marginTop: '2%',
    position: 'relative'
  },
}

export default TorrentCard;
