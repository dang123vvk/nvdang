import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    display: 'flex',
    // backgroundColor: '#1f3f52',
    flexDirection: 'row',
    paddingTop: spacing(2),
    alignItems: 'center',
    paddingBottom: spacing(2)
  },
  media: {
    // width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '48%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const InformationCardMobile = React.memo(function BlogCard({ mode, mobile }) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)} style={{ backgroundColor: mode === 'light' ? '#e7edf3' : '#1f3f52' }}>
      <CardMedia
        className={styles.media}
        style={{ width: mobile ? '40%' : '50%', height: mobile ? '240px' : '261px' }}
        image={
          '/nvdang.png'
        }
      />
      <CardContent >
        <TextInfoContent
          classes={contentStyles}
          overline={dayjs().format('DD MMM YYYY')}
          heading={'NGUYEN VAN DANG'}
        />
        <Typography>12.09.1997</Typography>
      </CardContent>
    </Card>
  );
});

export default InformationCardMobile