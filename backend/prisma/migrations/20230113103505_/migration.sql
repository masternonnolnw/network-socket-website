-- CreateTable
CREATE TABLE "YoutubeLinks" (
    "id" SERIAL NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courseId" INTEGER NOT NULL,
    "youtubeId" TEXT NOT NULL,

    CONSTRAINT "YoutubeLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YoutubeLinks" ADD CONSTRAINT "YoutubeLinks_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
