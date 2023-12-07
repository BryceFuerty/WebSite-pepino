import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import FloralImg from '../Floral.jpg';
import GeometricImg from '../Geometric.jpg';
import RealistImg from '../Realistic.jpg';
import Typography from '@mui/material/Typography';

export const  Example = () =>
{
    var items = [
        {
            name: "Floral",
            url: FloralImg,
            description: "Description for Floral"
          },
          {
            name: "Geometric",
            url: GeometricImg,
            description: "Description for Geometric"
          },
          {
            name: "Realistic",
            url: RealistImg,
            description: "Description for Realistic"
          },
    ]

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Carousel sx={{width: '400px', borderRadius:"5px"}} animation="slide" navButtonsAlwaysVisible>
                {items.map((item, i) => (
                <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    
    )
}

function Item(props : any)
{
    return (
         
        <Paper sx={{ display: 'inline-grid', flexDirection: 'column', alignItems: 'center' }}>
            <img
                src={props.item.url}
                alt={props.item.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
            <div style={{ marginTop: '10px' }}>
                <Typography variant="body2" color="text.primary" sx={{color:'black', fontSize:'20px'}}>
                    {props.item.description} <br/>
                    #########<br/>
                    #########
                </Typography>
            </div>
        </Paper>
    )
}