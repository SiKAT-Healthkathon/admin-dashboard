import CustomButton from "@/components/custom_button";
import { updateStatusReservation } from "@/services/reservation";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

interface StatusData {
  id: string;
  status: string;
}

interface StatusDialogProps {
  open: boolean;
  onClose: () => void;
  statusData: StatusData | null;
}

export default function StatusDialog(props: StatusDialogProps) {
  if (!props.statusData) return;

  const [currentStatus, setCurrentStatus] = useState<string | null>();
  const [isLoading, setLoading] = useState(false);

  const status =
    !currentStatus && props.statusData
      ? props.statusData.status
      : currentStatus;

  const onClose = () => {
    setCurrentStatus(null);
    props.onClose();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log(currentStatus, props.statusData);
      if (props.statusData?.id && currentStatus) {
        await updateStatusReservation(props.statusData?.id, currentStatus);
      }
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={props.open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: 3 }, elevation: 20 }}
    >
      <DialogTitle fontSize={18} fontWeight={700}>
        Pilih Status Pesanan
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "between",
        }}
      >
        <CustomButton
          variant={status === "Check In" ? "contained" : "outlined"}
          text="Check In"
          customColor={status === "Check In" ? "success.main" : "neutrals.500"}
          size="small"
          onClick={() => setCurrentStatus("Check In")}
        />
        <CustomButton
          variant={status === "Tindakan" ? "contained" : "outlined"}
          text="Tindakan"
          customColor={
            status === "Tindakan" ? "secondary.main" : "neutrals.500"
          }
          size="small"
          onClick={() => setCurrentStatus("Tindakan")}
        />
        <CustomButton
          variant={status === "Belum Datang" ? "contained" : "outlined"}
          text="Belum Datang"
          customColor={
            status === "Belum Datang" ? "error.main" : "neutrals.500"
          }
          size="small"
          onClick={() => setCurrentStatus("Belum Datang")}
        />
        <CustomButton
          variant={status === "Selesai" ? "contained" : "outlined"}
          text="Selesai"
          customColor={
            status === "Selesai" ? "secondary.light" : "neutrals.500"
          }
          size="small"
          onClick={() => setCurrentStatus("Selesai")}
        />
        <CustomButton
          variant={status === "Terdaftar" ? "contained" : "outlined"}
          text="Terdaftar"
          customColor={
            status === "Terdaftar" ? "secondary.dark" : "neutrals.500"
          }
          size="small"
          onClick={() => setCurrentStatus("Terdaftar")}
        />
      </DialogContent>
      <Divider />
      <DialogActions sx={{ px: 3, py: 2 }}>
        <CustomButton
          isLoading={isLoading}
          text="Simpan"
          customColor="primary.main"
          size="small"
          onClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
}
