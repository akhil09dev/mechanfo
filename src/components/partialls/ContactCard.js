import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ContactCard=(p)=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 600
                }
                }
                style={{backgroundColor: "#b1cbbb"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            {p.name[0]}
          </Avatar>
        }
        action={
            <CardActions disableSpacing>
       
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        }
        title={p.name}
        subheader={p.des}
      >
     </CardHeader>
    
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         {/* contact info goes here */}
          <Typography>
            {p.mail}
          </Typography>
          
         
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ContactCard