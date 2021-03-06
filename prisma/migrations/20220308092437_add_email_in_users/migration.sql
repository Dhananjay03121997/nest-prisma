/*
  Warnings:

  - You are about to drop the `new` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "new";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
