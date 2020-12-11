import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Study With Me',
    'header-p2': '는 캠스터디 플렛폼입니다.',
    'description': '이제 혼자하지 마세요. 원하는 스터디에 참여하세요. 다양한 주제 스터디가 운영되고 있어요. 함께 공부할 스터디 친구를 만나보세요',
    'primary-action': 'Sign in',
    'secondary-action': 'Sign Up',
    'pattern': 'images/pattern1.png',
    ...props.content
  };

  return (
    <section className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="primary" variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <Link to="./auth/login">
              <Button variant="contained" color="primary" className={classes.primaryAction}>{content['primary-action']}</Button>
            </Link>
            <Link to="./auth/signup">
              <Button>{content['secondary-action']}</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </section>
  );
}