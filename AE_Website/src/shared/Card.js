import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
    fontSize: '8',
  },
});

var cardStyle = {
  width: '30vw',
  transitionDuration: '0.3s',
  height: '35vw',
  padding: '1rem'
}

const BasicCard = ({ testimonial}) => {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ minWidth: 100 }} style={cardStyle} spacing={10}>
      <CardContent>
        <Typography variant='h5' component='div'>
         {testimonial}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small'>Show More</Button>
      </CardActions> */}
    </Card>
    </ThemeProvider>
  );
}

export default BasicCard;
