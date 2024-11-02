// app/rawat-jalan/page.tsx
import RawatJalanData from "@/components/rawat_jalan_data";
import RawatJalanFilter from "@/components/rawat_jalan_filter";
import { getReservations } from "@/services/reservation";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface FilterProps {
  page?: number;
  rowsPerPage?: number;
  status?: string;
  poli?: string;
}

interface SearchParams {
  searchParams: Promise<FilterProps>;
}

export default async function RawatJalan(props: SearchParams) {
  const searchParams = await props.searchParams;
  const { page = 1, rowsPerPage = 10, status, poli } = searchParams;

  const data = await getReservations({
    page,
    rowsPerPage,
    status,
    poli,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography fontWeight={700} fontSize={40}>
        Pasien Rawat Jalan
      </Typography>
      <RawatJalanFilter currentStatus={status} currentPoli={poli} />
      <RawatJalanData data={data} page={page} rowsPerPage={rowsPerPage} />
    </Box>
  );
}
