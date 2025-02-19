-- CreateTable
CREATE TABLE "Master" (
    "id" SERIAL NOT NULL,
    "human" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "work" TEXT NOT NULL,

    CONSTRAINT "Master_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Master_id_key" ON "Master"("id");
