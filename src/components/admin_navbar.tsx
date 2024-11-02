"use client";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { usePathname } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";

const drawerWidth = 240;

interface Page {
  name: string;
  link?: string;
}

const main: Page[] = [
  {
    name: "Dashboard",
    link: "/",
  },
  { name: "Rawat Inap" },
  { name: "Rawat Jalan", link: "/rawat-jalan" },
  { name: "Laporan BPJS" },
];

const administrasi: Page[] = [
  { name: "Pasien" },
  { name: "Tindakan" },
  { name: "Poli" },
  { name: "Dokter" },
  { name: "Operasi" },
  { name: "Tenaga Kesehatan" },
];

export default function AdminNavbar() {
  const path = usePathname();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "neutrals.light",
          color: "neutrals.dark",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        component={"nav"}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box ml={5}>
            <Image src={"/logo.png"} width={118} height={48} alt={""} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              gap: 2,
              display: "flex",
              justifyContent: "flex-end",
              color: "inherit",
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <Box>
              <Typography fontWeight={700} fontSize={14}>
                RS Bandung
              </Typography>
              <Typography fontSize={12}>Admin</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ overflow: "auto", flexGrow: 1 }}>
            <List>
              {main.map((page) => {
                const isSelected = path === page.link;
                return (
                  <ListItem
                    key={page.name}
                    sx={{
                      paddingY: 0,
                      paddingRight: 2,
                      paddingLeft: 0,
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Box
                      width={4}
                      height={45}
                      bgcolor={
                        path === page.link ? "primary.main" : "transparent"
                      }
                      sx={{
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                      }}
                    />
                    <ListItemButton
                      href={page.link ?? "#"}
                      sx={{
                        backgroundColor: isSelected
                          ? "primary.main"
                          : "transparent",
                        borderRadius: 2,
                        color: isSelected ? "white" : "inherit",
                        marginLeft: 1,
                        paddingY: 1,
                        paddingX: 1,
                        minHeight: 45,
                        ":hover": {
                          backgroundColor: isSelected ? "primary.main" : "",
                        },
                      }}
                    >
                      <ListItemText
                        primary={page.name}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <Typography color={"neutrals.800"} paddingLeft={2} paddingTop={1}>
              Administrasi
            </Typography>
            <List>
              {administrasi.map((page) => {
                const isSelected = path === page.link;
                return (
                  <ListItem
                    key={page.name}
                    sx={{
                      paddingY: 0,
                      paddingRight: 2,
                      paddingLeft: 0,
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Box
                      width={4}
                      height={45}
                      bgcolor={
                        path === page.link ? "primary.main" : "transparent"
                      }
                      sx={{
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                        marginLeft: 1,
                      }}
                    />
                    <ListItemButton
                      href={page.link ?? "#"}
                      sx={{
                        backgroundColor: isSelected
                          ? "primary.main"
                          : "transparent",
                        borderRadius: 2,
                        color: isSelected ? "white" : "inherit",
                        marginLeft: 1,
                        paddingY: 1,
                        paddingX: 1,
                        minHeight: 45,
                        ":hover": {
                          backgroundColor: isSelected ? "primary.main" : "",
                        },
                      }}
                    >
                      <ListItemText
                        primary={page.name}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ paddingY: 0, paddingX: 2 }}>
              <ListItemButton sx={{ borderRadius: 2, color: "inherit" }}>
                <ListItemIcon
                  sx={{ color: "inherit", minWidth: 0, marginRight: 1 }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={"Settings"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ paddingY: 0, paddingX: 2 }}>
              <ListItemButton sx={{ borderRadius: 2, color: "inherit" }}>
                <ListItemIcon
                  sx={{ color: "inherit", minWidth: 0, marginRight: 1 }}
                >
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={"Logout"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
