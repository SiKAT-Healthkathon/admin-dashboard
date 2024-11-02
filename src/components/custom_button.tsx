"use client";
import {
  Button,
  CircularProgress,
  ButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { FormEventHandler, MouseEventHandler, ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  customColor?: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  fitContent?: boolean;
  sx?: SxProps<Theme>;
}

function CustomButton({
  text,
  variant = "contained",
  isLoading = false,
  customColor = "primary.main",
  icon,
  iconPosition = "start",
  size = "medium",
  fitContent = false,
  disableElevation = false,
  sx,
  ...buttonProps
}: CustomButtonProps) {
  const startIcon = isLoading ? (
    <CircularProgress size={20} sx={{ color: "neutrals.300" }} />
  ) : iconPosition === "start" ? (
    icon
  ) : undefined;

  const endIcon = !isLoading && iconPosition === "end" ? icon : undefined;

  const commonStyles = {
    fontWeight: size === "large" ? 700 : 400,
    borderRadius: 2.25,
    px: 3,
    py: 1,
    fontSize: {
      xs: size === "large" ? 24 : 12,
      md: size === "large" ? 28 : size === "medium" ? 15 : 12,
      lg: size === "large" ? 32 : size === "medium" ? 18 : 14,
    },
  };

  const variantStyles =
    variant === "contained"
      ? {
          bgcolor: customColor,
          color: "white",
          "&:hover": {
            bgcolor: `${customColor}.800`,
          },
          "&:active": {
            bgcolor: `${customColor}.dark`,
            transform: "scale(0.98)",
          },
        }
      : variant === "outlined"
      ? {
          borderColor: customColor,
          color: customColor,
          bgcolor: "transparent",
          "&:hover": {
            borderColor: `${customColor}.800`,
            bgcolor: `${customColor}.50`,
          },
          "&:active": {
            borderColor: `${customColor}.dark`,
            color: `${customColor}.dark`,
            transform: "scale(0.98)",
          },
        }
      : {
          // For the "text" variant
          color: customColor,
          bgcolor: "transparent",
          "&:hover": {
            bgcolor: `${customColor}.50`,
          },
          "&:active": {
            color: `${customColor}.dark`,
            transform: "scale(0.98)",
          },
        };

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation={disableElevation}
      fullWidth={!fitContent}
      {...buttonProps}
      sx={{
        ...commonStyles,
        ...variantStyles,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
