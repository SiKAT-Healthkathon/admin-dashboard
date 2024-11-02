"use client";

import CustomTable, { Column } from "./custom_table";
import StatusDialog from "./status_dialog";
import { useState } from "react";
import { format } from "date-fns";
import { Reservation } from "@/types/reservation";

interface RawatJalan {
  id: string;
  nik: string;
  nama: string;
  waktu: Date;
  tanggal: Date;
  poli: string;
  status: string;
}

interface Data {
  data: Reservation[];
  total: number;
}

const columns: Column<RawatJalan>[] = [
  { id: "id", label: "ID", minWidth: 80, align: "center" },
  { id: "nik", label: "NIK", minWidth: 80, align: "center" },
  { id: "nama", label: "Nama", minWidth: 150 },
  {
    id: "waktu",
    label: "Waktu",
    minWidth: 150,
    format: (value: Date) => format(value, "HH:mm"),
  },
  {
    id: "tanggal",
    label: "Tanggal",
    minWidth: 100,
    format: (value: Date) => format(value, "dd MMM yyyy"),
  },
  {
    id: "poli",
    label: "Poli",
    minWidth: 100,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
    align: "center",
  },
];

interface RawatJalanDataProps {
  data: Data;
  page: number;
  rowsPerPage: number;
}

export default function RawatJalanData({
  data,
  rowsPerPage,
  page,
}: RawatJalanDataProps) {
  const { data: reservation, total } = data;

  const rows = reservation.map((reservation) => {
    return {
      id: reservation.id,
      nik: reservation.nik,
      nama: reservation.users.name,
      waktu: new Date(reservation.tanggal),
      tanggal: new Date(reservation.tanggal),
      poli: reservation.poli,
      status: reservation.status,
    };
  });

  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [statusData, setStatusData] = useState<{
    id: string;
    status: string;
  } | null>(null);

  const handleAction = (id: string, state: string, value?: string) => {
    if (state === "status" && value) {
      setStatusData({
        id: id,
        status: value,
      });
      setIsOpenStatus(true);
    }
  };

  return (
    <>
      <StatusDialog
        open={isOpenStatus}
        onClose={() => setIsOpenStatus(false)}
        statusData={statusData}
      />
      <CustomTable
        columns={columns}
        rows={rows}
        rowsPerPage={rowsPerPage}
        page={page}
        total={total}
        handleAction={handleAction}
      />
    </>
  );
}
