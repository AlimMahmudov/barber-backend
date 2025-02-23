-- CreateTable
CREATE TABLE "Watch" (
    "id" SERIAL NOT NULL,
    "oclock" TEXT NOT NULL,

    CONSTRAINT "Watch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Watch_id_key" ON "Watch"("id");
