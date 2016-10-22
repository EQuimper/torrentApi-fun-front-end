import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

const CategoriesCard = ({ title, subCat }) => (
  <Card style={styles.cardView}>
    <CardHeader
      subtitle="ThePirateBay"
      avatar="tpblogo.jpg"
    />
    <CardTitle title={title.toUpperCase()} />
    <CardText style={styles.chipContainer}>
      {Object.keys(subCat).map((sCat, i) => (
        <Chip style={styles.chip} key={i}>
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
    marginTop: '2%'
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
