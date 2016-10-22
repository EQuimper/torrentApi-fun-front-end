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

const CategoriesCard = ({ title, subCat, index }) => {
  return (
    <Card style={styles.cardView}>
      <CardHeader
        style={{ backgroundColor: colors[index] }}
        title="ThePirateBay"
        avatar="tpblogo.jpg"
      />
      <div style={{ ...styles.iconRight, ...styles.iconRightContainer }}>
        {checkIcon(title)}
      </div>
      <CardTitle title={title.toUpperCase()} />
      <CardText style={styles.chipContainer}>
        {Object.keys(subCat).map((sCat, i) => (
          <Chip backgroundColor={colors[i % colors.length]} style={styles.chip} key={i} labelColor="white">
            {sCat.toUpperCase()}
          </Chip>
        ))}
      </CardText>
    </Card>
  )
}

const styles = {
  cardView: {
    display: 'flex',
    width: '32%',
    marginTop: '2%',
    position: 'relative'
  },
  iconRightContainer: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    position: 'absolute',
    top: '3%',
    right: '3%',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  },
  iconRight: {
    width: 25,
    height: 25
  },
  chipContainer: {
    display: 'flex',
    width: '90%',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 3
  }
}

export default CategoriesCard;
