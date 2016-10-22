import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import './torrentcard.css';

const winOpen = url => window.open(url, 'toolbar=0,status=0,width=548,height=325');

const truncateText = txt => {
  if (txt.length >= 90) {
    return txt.substring(0, 90) + '...';
  }
  return txt;
}

const changeCat = cat => {
  const catArr = cat.split('');
  console.log(catArr);
}

const TorrentCard = ({ title, categorie, url, leeches, seeds }) => (
  <Card style={styles.cardView}>
    <CardHeader
      style={{ backgroundColor: 'rgb(0, 188, 212)' }}
      subtitle={changeCat(categorie)}
      titleStyle={{ color: '#ffffff' }}
      title="ThePirateBay"
    />
    <Divider />
    <CardTitle title={truncateText(title)} style={{ padding: 20, height: 150, minHeight: 150, maxHeight: 150 }} />
    <CardText style={styles.chipContainer}>
      <Chip backgroundColor="rgb(47, 235, 94)" labelColor="white">
        {seeds} Seeders
      </Chip>
      <Chip backgroundColor="rgb(230, 84, 79)" labelColor="white">
        {leeches} Leechers
      </Chip>
    </CardText>
    <Divider />
    <CardActions style={{ padding: 10, maxHeight: 40, height: 40 }}>
      <RaisedButton
        label="Download"
        onClick={() => winOpen(url)}
        primary
        labelColor="white"
      />
    </CardActions>
  </Card>
);

const styles = {
  cardView: {
    overflow: 'hidden',
    width: '32%',
    height: 'auto',
    marginTop: '2%',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
  },
  chipContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default TorrentCard;
