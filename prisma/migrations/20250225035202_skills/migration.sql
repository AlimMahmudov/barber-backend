-- AlterTable
ALTER TABLE "Master" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Описание не задано',
ADD COLUMN     "rating" TEXT NOT NULL DEFAULT 'Не оценено',
ADD COLUMN     "skills" TEXT NOT NULL DEFAULT 'Навыки не заданы';
