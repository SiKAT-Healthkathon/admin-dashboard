"use client";

import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomButton from "@/components/custom_button";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { deleteSearchParams, updateSearchParams } from "@/lib/query";
import { format, parse } from "date-fns";

interface RawatJalanFilterProps {
  currentStatus?: string;
  currentPoli?: string;
}

const poli: { id: string; value: string }[] = [
  {
    id: "Poli Gigi",
    value: "Poli Gigi",
  },
  {
    id: "Poli Umum",
    value: "Poli Umum",
  },
  {
    id: "Poli Spesial",
    value: "Poli Spesial",
  },
  {
    id: "Poli Jantung",
    value: "Poli Jantung",
  },
  {
    id: "Poli KIA",
    value: "Poli KIA",
  },
];

const status: { id: string; value: string }[] = [
  {
    id: "Check In",
    value: "Check In",
  },
  {
    id: "Tindakan",
    value: "Tindakan",
  },
  {
    id: "Selesai",
    value: "Selesai",
  },
  {
    id: "Belum Datang",
    value: "Belum Datang",
  },
];

export default function RawatJalanFilter(props: RawatJalanFilterProps) {
  const handleChangestatus = (e: SelectChangeEvent<string>) => {
    const code = status.find((x) => x.value === e.target.value)?.id;
    if (!code) return;
    const newRoute = updateSearchParams("status", code);
    window.location.href = newRoute;
  };

  const handleChangePoli = (e: SelectChangeEvent<string>) => {
    const code = poli.find((x) => x.value === e.target.value)?.id;
    if (!code) return;
    const newRoute = updateSearchParams("poli", code);
    window.location.href = newRoute;
  };

  const handleReset = () => {
    const newRoute = deleteSearchParams(["status", "poli"]);
    window.location.href = newRoute;
  };

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
        <Image width={24} height={24} src="/filter_icon.png" alt="" />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Typography paddingX={2} fontSize={16}>
        Filter
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Select
        displayEmpty
        variant="standard"
        disableUnderline
        value={poli.find((type) => type.id === props.currentPoli)?.value}
        onChange={handleChangePoli}
        renderValue={(selected: string) => {
          if (!selected) {
            return <Typography color="neutrals.400">Poli</Typography>;
          }

          return selected;
        }}
        sx={{ paddingX: 2, minWidth: "160px", mr: 1 }}
      >
        {poli.map((type) => (
          <MenuItem key={type.id} value={type.value}>
            {type.value}
          </MenuItem>
        ))}
      </Select>
      <Divider orientation="vertical" flexItem />
      <Select
        displayEmpty
        variant="standard"
        disableUnderline
        value={
          status.find((status) => status.id === props.currentStatus)?.value
        }
        onChange={handleChangestatus}
        renderValue={(selected: string) => {
          if (!selected) {
            return <Typography color="neutrals.400">Status</Typography>;
          }

          return selected;
        }}
        sx={{ paddingX: 2, minWidth: "160px", mr: 1 }}
      >
        {status.map((status) => (
          <MenuItem key={status.id} value={status.value}>
            {status.value}
          </MenuItem>
        ))}
      </Select>
      <Divider orientation="vertical" flexItem />
      <CustomButton
        variant="text"
        startIcon={<RestartAltOutlinedIcon />}
        text="Reset Filter"
        onClick={handleReset}
        sx={{ color: "error.main", py: 1, borderRadius: 0 }}
      ></CustomButton>
    </Paper>
  );
}
