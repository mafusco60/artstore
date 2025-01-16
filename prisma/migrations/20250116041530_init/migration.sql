-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "images" TEXT[],
    "original" BOOLEAN NOT NULL DEFAULT true,
    "originalPrice" INTEGER,
    "printStartPrice" INTEGER NOT NULL DEFAULT 0,
    "substrate" TEXT,
    "dimension" TEXT,
    "portrait" BOOLEAN NOT NULL DEFAULT true,
    "artist" TEXT NOT NULL DEFAULT 'Mary',
    "rating" DECIMAL(4,2) NOT NULL DEFAULT 0,
    "numReviews" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "banner" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
