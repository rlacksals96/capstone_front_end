import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ApartmentIcon from '@material-ui/icons/Apartment';
import DnsIcon from '@material-ui/icons/Dns';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: fade(theme.palette.background.emphasis, .6),
  },
  img: {
    maxWidth: '100%'
  }
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const content = {
    'badge': 'Study With Me',
    'header-p1': 'Cam Study',
    'header-p2': '는 실시간 영상 커뮤니케이션을 지원합니다.',
    'description': '서로 공부하는 모습을 보며 집중해서 공부할 수 있어요. 하루에 약 10,000 명의 사람들이 이용하는 온라인 독서실로, 사용자의 평균 사용 시간은 8시간입니다.여러분이 걱정 없이 공부에만 집중할 수 있도록 더욱 노력하겠습니다.',
    'col1-header': '다른 사람들과 공부할 수 있습니다.',
    'col2-header': '게시판을 활용하여 다른 사람들과 정보 교환할 수 있습니다.',
    'col3-header': 'WebRTC를 이용한 실시간 영상 커뮤니케이션 플롯폼입니다.',
    'image': 'images/remote office business.png',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography color="primary" variant="h3" component="span">{content['header-p1']} </Typography>
                  <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                <div>
                  <Box mt={3} mb={2} display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <PeopleIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                  </Box>
                  <Box mb={2} display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <DnsIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <TapAndPlayIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={content['image']} alt="" className={classes.img} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}