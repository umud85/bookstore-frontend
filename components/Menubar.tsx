"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from "next/navigation";

export default function ButtonAppBar() {
  const menuitems = ["Home", "Books", "About"]
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { md: "none" },
              mr: 2
            }}
          >
            <MenuIcon sx={{ display: { md: "none" }, }} />
          </IconButton>
          <Typography sx={{ display: {md: "block" }}}>The Bookstore</Typography>
          <List sx={{ display: { xs: "none", md: "flex" }}}>
            {menuitems.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
            </ListItem>
            ))}
          </List>
          <Button
            sx={{ marginLeft: "auto" }}
            color="inherit"
            onClick={() => {router.push("/signin")}}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}