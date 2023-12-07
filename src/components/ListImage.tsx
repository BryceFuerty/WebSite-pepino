import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import image from '../Floral.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      //
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);


 const itemData = [
  {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image,
      title: '1',
      author: 'author',
    },
    {
      img: image,
      title: '2',
      author: 'author',
    },
    {
      img: image,
      title: '3',
      author: 'author',
    },
    {
      img: image,
      title: '4',
      author: 'author',
    },
    {
      img: image,
      title: '5',
      author: 'author',
    },
    {
      img: image,
      title: '6',
      author: 'author',
    },
    {
      img: image,
      title: '7',
      author: 'author',
    },

  ];
 

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1.5} style={{height: "100%",width:"100%"}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{height:"380px", width:"200px"}}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
