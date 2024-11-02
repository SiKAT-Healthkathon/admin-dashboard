import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface StatsCardProps {
  title: string;
  value: string | number;
  imageSrc: string;
  percentageChange: string;
  isIncrease: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  imageSrc,
  percentageChange,
  isIncrease,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "neutrals.light",
        borderRadius: 3,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
        <Box>
          <Typography fontWeight={500} fontSize={14} color={"neutrals.500"}>
            {title}
          </Typography>
          <Typography fontWeight={700} fontSize={28}>
            {value}
          </Typography>
        </Box>
        <Image src={imageSrc} width={60} height={60} alt={title} />
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 2 }}>
        <Image
          src={isIncrease ? "/increase.png" : "/decrease.png"}
          width={16}
          height={16}
          alt="Change icon"
        />
        <Typography
          color={isIncrease ? "success.main" : "error.main"}
          fontSize={16}
        >
          {percentageChange}
        </Typography>
        <Typography color="neutrals.500" fontSize={16}>
          {isIncrease ? "Naik dari Kemarin" : "Terlambat"}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsCard;
