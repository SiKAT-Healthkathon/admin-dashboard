"use server";
import { createClient } from "@/lib/supabase";
import { Reservation } from "@/types/reservation";
import { revalidatePath } from "next/cache";

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
      users (
        name
      )
    `
    )
    .range(skip, skip + rowsPerPage - 1)
    .order("tanggal", { ascending: false });

  if (status) {
    query.eq("status", status);
  }

  if (poli) {
    query.eq("poli", poli);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching reservations:", error);
    throw new Error("Could not fetch reservations");
  }

  const totalCountQuery = supabase
    .from("reservations")
    .select("nik", { count: "exact" });

  if (status) {
    totalCountQuery.eq("status", status);
  }

  if (poli) {
    totalCountQuery.eq("poli", poli);
  }

  const { count: totalCount, error: totalCountError } = await totalCountQuery;

  if (totalCountError) {
    console.error("Error fetching total count:", totalCountError);
    throw new Error("Could not fetch total count");
  }

  return {
    total: totalCount as number,
    data: data as Reservation[],
  };
};

export const updateStatusReservation = async (id: string, status: string) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from("reservations")
    .update({ status })
    .eq("id", id);

  if (error) {
    throw new Error("Could not update status");
  }

  revalidatePath("/rawat_jalan");
};
