// services/reservation.ts
import { createClient } from "@/lib/supabase";

export const getReservations = async ({
  status,
  poli,
  page,
  rowsPerPage,
}: {
  status?: string;
  poli?: string;
  page: number;
  rowsPerPage: number;
}) => {
  const supabase = await createClient();

  const skip = (page - 1) * rowsPerPage;

  const query = supabase
    .from("reservations")
    .select(
      `
      *,
      user (
        nik, 
        nama, 
        email
      )
    `
    )
    .range(skip, skip + rowsPerPage - 1);

  // Apply filters if they are provided
  if (status) {
    query.eq("status", status);
  }

  if (poli) {
    query.eq("poli", poli);
  }

  const { data, count } = await query;

  return {
    total: count,
    data,
  };
};
