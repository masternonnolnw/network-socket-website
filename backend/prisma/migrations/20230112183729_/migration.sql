/*
  Warnings:

  - Added the required column `downloadLink` to the `CourseMaterial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseMaterial" ADD COLUMN     "downloadLink" TEXT NOT NULL;
