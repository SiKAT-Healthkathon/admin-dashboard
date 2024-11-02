export interface Reservation {
  id: string;
  created_at: string;
  layanan: string;
  provinsi: string;
  kota: string;
  rumah_sakit: string;
  poli: string;
  dokter: string;
  keluhan: string;
  tanggal: string;
  nik: string;
  status: string;
  users: User;
}

interface User {
  name: string; // Adjust this based on the properties you need
}
