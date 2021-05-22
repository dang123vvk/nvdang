import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip, useMediaQuery, useTheme } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTrans from '../hooks/useTrans'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const socialNetworks = [{
  icon: <FacebookIcon />,
  link: 'https://facebook.com/dang123vvk'
},
{
  icon: <InstagramIcon />,
  link: 'https://instagram.com/dang.van.nguyen'
}, {
  icon: <GitHubIcon />,
  link: 'https://github.com/nvdang-dev'
}]

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
function Header({modeTheme, changeModeTheme}) {
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
        {socialNetworks.map((data, index) => (
          <ListItem button key={index}>
            <a href={data.link}><ListItemIcon>{data.icon}</ListItemIcon></a>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const goToSocialNetwork = (e, link) => {
    e.preventDefault();
    window.location.href = link
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: modeTheme==='light'? '#455a64': '#333' }}>
        {sm || xs ? (
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <IconButton color="inherit" onClick={e=>changeModeTheme(e,modeTheme==='light'? 'dark': 'light')} aria-label="upload picture" component="span" className={classes.iconButton}>
            {modeTheme==='light' ? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('en')} className={locale === 'en' ? classes.localeButton : classes.noneButton}>EN</Button>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('vi')} className={locale === 'vi' ? classes.localeButton : classes.noneButton}>VI</Button>
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
            {socialNetworks.map((data, index) => (
              <IconButton onClick={e => goToSocialNetwork(e, data.link)} color="inherit" href={data.link} key={index} aria-label="upload picture" component="span" className={classes.iconButton}>
                {data.icon}
              </IconButton>
            ))}
            <Tooltip title="Light/Dark theme">
              <IconButton onClick={e=>changeModeTheme(e,modeTheme==='light'? 'dark': 'light')} color="inherit" aria-label="upload picture" component="span" className={classes.iconButton}>
                {modeTheme==='light' ? <Brightness7Icon /> : <Brightness4Icon /> }
              </IconButton>
            </Tooltip>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('en')} className={locale === 'en' ? classes.localeButton : classes.noneButton}>EN</Button>
            <Button color="inherit" variant="outlined" onClick={() => changeLang('vi')} className={locale === 'vi' ? classes.localeButton : classes.noneButton}>VI</Button>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
export default Header;
