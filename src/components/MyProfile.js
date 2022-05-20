
    import * as React from "react";
    import { styled } from "@mui/material/styles";
    import Card from "@mui/material/Card";
    import CardHeader from "@mui/material/CardHeader";
    import CardMedia from "@mui/material/CardMedia";
    import CardContent from "@mui/material/CardContent";
    import CardActions from "@mui/material/CardActions";
    import Collapse from "@mui/material/Collapse";
    import Avatar from "@mui/material/Avatar";
    import IconButton from "@mui/material/IconButton";
    import Typography from "@mui/material/Typography";
    import { red } from "@mui/material/colors";
    import FavoriteIcon from "@mui/icons-material/Favorite";
    import ShareIcon from "@mui/icons-material/Share";
    import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
    import MoreVertIcon from "@mui/icons-material/MoreVert";
    import Stack from "@mui/material/Stack";
    import Button from "@mui/material/Button";
    import Box from "@mui/material/Box";
    import TextField from "@mui/material/TextField";
    import Headersign from './Headersign';
    
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    
    export default function MyProfile() {
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      return (
        <div>
            <Headersign/>
        <Card sx={{ maxWidth: 345 }}>
            
          <h1>My Profile</h1>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                kc
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Kishore chandra"
            subheader="Mar, 19 2022"
          />
          <CardMedia
            component="img"
            height="300"
            image="https://images.unsplash.com/photo-1652488635133-3f186ad5e66e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464"
            alt="my PIC"
          />
          <CardContent>
            <h2>Kishore</h2>
            <h5>kishore@gmail.com</h5>
            <Typography variant="body2" color="text.secondary">
              <Button variant="contained">Edit Profile</Button>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            ></ExpandMore>
          </CardActions>
        </Card>
        </div>
      );
    }