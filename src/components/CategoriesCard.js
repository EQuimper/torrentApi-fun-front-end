import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import MovieIcon from 'material-ui/svg-icons/av/movie';
import AudioIcon from 'material-ui/svg-icons/image/audiotrack';
import ApplicationIcon from 'material-ui/svg-icons/action/settings-applications';
import GamesIcon from 'material-ui/svg-icons/av/games';

const colors = [
  '#50514F',
  '#F25F5C',
  '#FFE066',
  '#247BA0',
  '#70C1B3',
];

const checkIcon = name => {
  switch (name) {
    case 'audio':
      return <AudioIcon style={styles.iconRight} />;
    case 'video':
      return <MovieIcon style={styles.iconRight} />;
    case 'applications':
      return <ApplicationIcon style={styles.iconRight} />;
    case 'games':
      return <GamesIcon style={styles.iconRight} />;
    default:
      return null;
  }
}

const CategoriesCard = ({ title, subCat, index }) => (
  <Card style={styles.cardView}>
    <CardHeader
      style={{ backgroundColor: colors[index] }}
      subtitle="ThePirateBay"
      avatar="tpblogo.jpg"
    />
    <div style={[styles.iconRight, styles.iconRightContainer]}>
      {checkIcon(title)}
    </div>
    <CardTitle title={title.toUpperCase()} />
    <CardText style={styles.chipContainer}>
      {Object.keys(subCat).map((sCat, i) => (
        <Chip backgroundColor={colors[i]} style={styles.chip} key={i}>
          {sCat.toUpperCase()}
        </Chip>
      ))}
    </CardText>
  </Card>
);

const styles = {
  cardView: {
    display: 'flex',
    width: '32%',
    marginTop: '2%',
    position: 'relative'
  },
  iconRightContainer: {
    backgroundColor: 'pink'
  },
  iconRight: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    width: 40,
    height: 40
  },
  chipContainer: {
    display: 'flex',
    width: '90%',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 3,
    color: '#fff'
  }
}

export default CategoriesCard;
