"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { updateSearchParams } from "@/lib/query";
import { alpha, Box, Button, Divider, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomButton from "./custom_button";
import theme from "@/theme";

export interface Column<T> {
  id: keyof T;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: any) => string;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  rowsPerPage: number;
  page: number;
  total: number;
  handleAction?: (id: string, state: string, value?: string) => void;
}

export default function CustomTable<T>({
  columns,
  rows,
  rowsPerPage,
  page,
  total,
  handleAction,
}: CustomTableProps<T>) {
  const handleChangePage = (page: number) => {
    const newRoute = updateSearchParams("page", String(page));
    window.location.href = newRoute;
  };

  const handleChangeRowsPerPage = (value: string) => {
    const newRoute = updateSearchParams("rowsPerPage", value);
    window.location.href = newRoute;
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 3,
        border: 1,
        borderColor: "neutrals.100",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.id == "id") return;
                return (
                  <TableCell
                    key={column.id as string}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 700 }}
                  >
                    {column.label.toUpperCase()}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => {
              let id = "";
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.id as keyof T] ?? "";
                    if (column.id == "id") {
                      id = value as string;
                      return;
                    }
                    if (column.id == "status" && handleAction) {
                      return (
                        <TableCell
                          key={column.id as string}
                          align={column.align}
                        >
                          <CustomButton
                            size="small"
                            customColor={
                              value == "Check In"
                                ? alpha(theme.palette.success.main, 0.3)
                                : value == "Belum Datang"
                                ? alpha(theme.palette.error.main, 0.3)
                                : value == "Tindakan"
                                ? alpha(theme.palette.secondary.main, 0.3)
                                : alpha(theme.palette.secondary.light, 0.3)
                            }
                            sx={{
                              fontSize: 12,
                              py: 0.7,
                              fontWeight: 600,
                              color:
                                value == "Check In"
                                  ? alpha(theme.palette.success.main, 1)
                                  : value == "Belum Datang"
                                  ? alpha(theme.palette.error.main, 1)
                                  : value == "Tindakan"
                                  ? alpha(theme.palette.secondary.main, 1)
                                  : alpha(theme.palette.secondary.light, 1),
                            }}
                            onClick={() =>
                              handleAction(
                                id,
                                column.id as string,
                                value as string
                              )
                            }
                            text={String(value)}
                          />
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id as string} align={column.align}>
                        {column.format ? column.format(value) : String(value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={(_, page) => handleChangePage(page)}
        onRowsPerPageChange={(e) => handleChangeRowsPerPage(e.target.value)}
      />
    </Paper>
  );
}
