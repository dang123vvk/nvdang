import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTrans from '../../../pages/hooks/useTrans'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  iconButton: {
    marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  localeButton: {
    borderRadius: 10,
    borderColor: 'white',
    marginRight: 10
  },
  noneButton: {
    border: 0
  }
}));
function Header() {
  const [stateMenu, setStateMenu] = React.useState(false);
  const theme = useTheme();
  const router = useRouter()
  const { locale } = useRouter()
  const t = useTrans()
  const sm = useMediaQuery(theme.breakpoints.down("xs"));
  const xs = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  const changeLang = (lang) => {
    const currentRoute = router.pathname
    router.push(currentRoute, currentRoute, { locale: lang })
  }
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStateMenu(open);
  };
  const goTo = (e, href) => {
    e.preventDefault()
    router.push(href)
    setStateMenu(false)
  }
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {[t.menu.utilities, t.menu.blog, t.menu.about].map((text, index) => (
          <ListItem button key={text} onClick={e => goTo(e, text === t.menu.about ? '/about' : '/')} key={index}>
            <ListItemText primary={text} />
            {/* <ListItemIcon>{index % 2 === 0 ? <FacebookIcon /> : <InstagramIcon />}</ListItemIcon> */}

          </ListItem>
        ))}
        {[<FacebookIcon />, <InstagramIcon />, <GitHubIcon />].map((icon, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#455a64' }}>
        {sm || xs ? (
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('en')} className={locale === 'en'? classes.localeButton: classes.noneButton }>EN</Button>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('vi')} className={locale === 'vi'? classes.localeButton: classes.noneButton }>VI</Button>
            <IconButton color="inherit" aria-label="upload picture" component="span" className={classes.iconButton} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={stateMenu} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </Toolbar>
        ) : (
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Link href="/"><Button color="inherit" className={classes.linkButton}>{t.menu.utilities}</Button></Link>
            <Button color="inherit" className={classes.linkButton}>{t.menu.blog}</Button>
            <Link href="/about"><Button color="inherit" className={classes.linkButton}>{t.menu.about}</Button></Link>
            <IconButton color="inherit" aria-label="upload picture" component="span" className={classes.iconButton}>
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="upload picture" component="span" className={classes.iconButton}>
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="upload picture" component="span" className={classes.iconButton}>
              <GitHubIcon />
            </IconButton>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('en')} className={locale === 'en'? classes.localeButton: classes.noneButton }>EN</Button>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('vi')} className={locale === 'vi'? classes.localeButton: classes.noneButton }>VI</Button>
          </Toolbar>
        )}

      </AppBar>
    </div>
  );
}
export default Header;
