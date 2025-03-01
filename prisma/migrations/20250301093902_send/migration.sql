-- CreateTable
CREATE TABLE "Send" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "master" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Send_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Send_id_key" ON "Send"("id");
