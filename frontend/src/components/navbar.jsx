import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "/contact" },
  { name: "Register", link: "/register" },
  { name: "Demo Page", link: "/demo" },
  { name: "Payment", link: "/pay" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#333333", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HourglassBottomIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ARTVISTA
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiMenu-paper": {
                    width: 1,
                    backgroundColor: "#333333",
                    padding: 1,
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link
                      to={page.link}
                      textAlign="center"
                      style={{
                        width: "100%",
                        textDecoration: "none",
                        fontSize: 20,
                        color: "white",
                        textAlign: "center",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        marginTop: 15,
                      }}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <HourglassBottomIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ARTVISTA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  to={page.link}
                  key={page.name}
                  style={{
                    textDecoration: "none",
                    fontSize: 15,
                    color: "white",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    marginRight: 25,
                    marginLeft: 25,
                  }}
                  onClick={handleCloseNavMenu}
                >
                  {page.name}
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Outlet />
    </>
  );
}
export default ResponsiveAppBar;
