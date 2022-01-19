-- CreateTable
CREATE TABLE "Kontak" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,

    CONSTRAINT "Kontak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "idKontak" INTEGER NOT NULL,
    "alamat" TEXT,
    "ulangTahun" TIMESTAMP(3),
    "gender" TEXT,
    "sudahMenikah" BOOLEAN,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("idKontak")
);

-- CreateTable
CREATE TABLE "SosialMedia" (
    "idSosmed" SERIAL NOT NULL,
    "idKontak" INTEGER NOT NULL,
    "namaSosmed" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "SosialMedia_pkey" PRIMARY KEY ("idSosmed")
);

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_idKontak_fkey" FOREIGN KEY ("idKontak") REFERENCES "Kontak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SosialMedia" ADD CONSTRAINT "SosialMedia_idKontak_fkey" FOREIGN KEY ("idKontak") REFERENCES "Kontak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
