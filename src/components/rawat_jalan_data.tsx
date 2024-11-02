"use client";

import CustomTable, { Column } from "./custom_table";
import StatusDialog from "./status_dialog";
import { useState } from "react";
import { RawatJalan } from "@/types/rawat_jalan";
import { format } from "date-fns";

interface Data {
  data: RawatJalan[];
  total: number;
}

const columns: Column<RawatJalan>[] = [
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
  const { data: rows, total } = data;

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
