import AreaChart from "@/components/area_chart";
import StatsCard from "@/components/stats_card";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Page() {
  const generatePatientData = (days: number) => {
    const data = [];
    const categories = [];

    for (let i = 0; i < days; i++) {
      const date = new Date(2024, 0, i + 1); // January 2024
      const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
      categories.push(formattedDate);
      // Generate random patient visit numbers (between 1000 and 5000)
      const patientCount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
      data.push(patientCount);
    }

    return { data, categories };
  };

  // Generate data for 30 days
  const { data, categories } = generatePatientData(30);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography fontWeight={700} fontSize={40}>
        Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <StatsCard
          title={"Pasien Mendaftar"}
          value={"14.040"}
          imageSrc={"/pasien.png"}
          percentageChange={"8.5%"}
          isIncrease
        />
        <StatsCard
          title={"Poli Klinik"}
          value={"5"}
          imageSrc={"/poli.png"}
          percentageChange={"1.3%"}
          isIncrease
        />
        <StatsCard
          title={"Pasien Rawat Jalan"}
          value={"12.000"}
          imageSrc={"/rawat_jalan.png"}
          percentageChange={"4.3%"}
          isIncrease={false}
        />
        <StatsCard
          title={"Pasien Rawat Inap"}
          value={"2.040"}
          imageSrc={"/rawat_inap.png"}
          percentageChange={"1.5%"}
          isIncrease={false}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <AreaChart data={data} categories={categories} title="Pasien" />
      </Box>
    </Box>
  );
}
