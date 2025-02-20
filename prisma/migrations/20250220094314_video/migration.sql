-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "youtube" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Video_id_key" ON "Video"("id");
