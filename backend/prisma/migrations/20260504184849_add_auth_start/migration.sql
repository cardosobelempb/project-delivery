/*
  Warnings:

  - You are about to drop the column `domingo` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `feriados` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `quarta` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `quinta` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `sabado` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `segunda` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `sexta` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `sort_order` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `terca` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `related_id` on the `midia` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `related_id` on the `subdomains` table. All the data in the column will be lost.
  - You are about to drop the column `commission` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `keepalive` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_login` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `operation` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `recover_key` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(150)`.
  - The `status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `users_data` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Made the column `visible` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "MemberStatus" AS ENUM ('ACTIVE', 'INVITED', 'SUSPENDED', 'REMOVED');

-- CreateEnum
CREATE TYPE "OrganizationStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'DELETED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "MemberRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'SUPPORT', 'FINANCE', 'MEMBER');

-- CreateEnum
CREATE TYPE "ConsentStatus" AS ENUM ('ACTIVE', 'REVOKED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('REFRESH', 'ACCESS', 'RESET_PASSWORD', 'API_KEY');

-- AlterEnum
ALTER TYPE "VisibilityStatus" ADD VALUE 'ARCHIVED';

-- DropForeignKey
ALTER TABLE "midia" DROP CONSTRAINT "midia_related_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "users_data" DROP CONSTRAINT "users_data_user_id_fkey";

-- DropIndex
DROP INDEX "midia_related_id_idx";

-- DropIndex
DROP INDEX "products_category_id_idx";

-- DropIndex
DROP INDEX "subdomains_related_id_idx";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "domingo",
DROP COLUMN "feriados",
DROP COLUMN "quarta",
DROP COLUMN "quinta",
DROP COLUMN "sabado",
DROP COLUMN "segunda",
DROP COLUMN "sexta",
DROP COLUMN "sort_order",
DROP COLUMN "terca",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "parent_id" UUID,
ADD COLUMN     "slug" VARCHAR(255),
ALTER COLUMN "visible" SET NOT NULL,
ALTER COLUMN "visible" SET DEFAULT 'VISIBLE';

-- AlterTable
ALTER TABLE "midia" DROP COLUMN "related_id",
ADD COLUMN     "product_id" UUID;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_id";

-- AlterTable
ALTER TABLE "subdomains" DROP COLUMN "related_id",
ADD COLUMN     "establishment_id" UUID;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "commission",
DROP COLUMN "keepalive",
DROP COLUMN "last_login",
DROP COLUMN "level",
DROP COLUMN "operation",
DROP COLUMN "recover_key",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "email_verified" TIMESTAMP(3),
ADD COLUMN     "image" VARCHAR(500),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(150),
DROP COLUMN "status",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET NOT NULL;

-- DropTable
DROP TABLE "users_data";

-- CreateTable
CREATE TABLE "auth_accounts" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(100) NOT NULL,
    "provider_account_id" VARCHAR(255) NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" VARCHAR(50),
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "auth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL,
    "session_token" VARCHAR(255) NOT NULL,
    "user_id" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "birth_date" DATE,
    "document_type" "DocumentType",
    "document_number" VARCHAR(30),
    "phone" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lgpd_consents" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "consent_terms" BOOLEAN NOT NULL,
    "consent_marketing" BOOLEAN NOT NULL,
    "consent_data_sharing" BOOLEAN NOT NULL,
    "consent_analytics" BOOLEAN NOT NULL,
    "ip_address" VARCHAR(45) NOT NULL,
    "mac_address" VARCHAR(20),
    "user_agent" VARCHAR(500) NOT NULL,
    "consent_version" VARCHAR(10) NOT NULL,
    "status" "ConsentStatus" NOT NULL DEFAULT 'ACTIVE',
    "withdrawn_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lgpd_consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" "TokenType" NOT NULL DEFAULT 'ACCESS',
    "value_hash" VARCHAR(255) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "revoked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otps" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "phone" VARCHAR(30) NOT NULL,
    "code_hash" VARCHAR(255) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "otps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(150) NOT NULL,
    "document_type" "DocumentType",
    "document_number" VARCHAR(30),
    "contact_email" VARCHAR(255),
    "phone" VARCHAR(20),
    "logo_url" VARCHAR(500),
    "status" "OrganizationStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "MemberRole" NOT NULL DEFAULT 'MEMBER',
    "status" "MemberStatus" NOT NULL DEFAULT 'ACTIVE',
    "invited_email" VARCHAR(255),
    "invited_by_id" UUID,
    "joined_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3),
    "removed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "product_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("product_id","category_id")
);

-- CreateTable
CREATE TABLE "_AddressToOrganization" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_AddressToOrganization_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "auth_accounts_user_id_idx" ON "auth_accounts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_accounts_provider_provider_account_id_key" ON "auth_accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "user_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_document_number_key" ON "user_profiles"("document_number");

-- CreateIndex
CREATE INDEX "user_profiles_document_number_idx" ON "user_profiles"("document_number");

-- CreateIndex
CREATE INDEX "lgpd_consents_user_id_idx" ON "lgpd_consents"("user_id");

-- CreateIndex
CREATE INDEX "lgpd_consents_organization_id_idx" ON "lgpd_consents"("organization_id");

-- CreateIndex
CREATE INDEX "lgpd_consents_status_idx" ON "lgpd_consents"("status");

-- CreateIndex
CREATE UNIQUE INDEX "lgpd_consents_user_id_organization_id_consent_version_key" ON "lgpd_consents"("user_id", "organization_id", "consent_version");

-- CreateIndex
CREATE INDEX "tokens_user_id_idx" ON "tokens"("user_id");

-- CreateIndex
CREATE INDEX "tokens_user_id_type_idx" ON "tokens"("user_id", "type");

-- CreateIndex
CREATE INDEX "tokens_user_id_expires_at_idx" ON "tokens"("user_id", "expires_at");

-- CreateIndex
CREATE INDEX "tokens_deleted_at_idx" ON "tokens"("deleted_at");

-- CreateIndex
CREATE INDEX "otps_phone_idx" ON "otps"("phone");

-- CreateIndex
CREATE INDEX "otps_user_id_idx" ON "otps"("user_id");

-- CreateIndex
CREATE INDEX "otps_expires_at_idx" ON "otps"("expires_at");

-- CreateIndex
CREATE INDEX "otps_deleted_at_idx" ON "otps"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_document_number_key" ON "organizations"("document_number");

-- CreateIndex
CREATE INDEX "organizations_status_idx" ON "organizations"("status");

-- CreateIndex
CREATE INDEX "organizations_deleted_at_idx" ON "organizations"("deleted_at");

-- CreateIndex
CREATE INDEX "memberships_organization_id_idx" ON "memberships"("organization_id");

-- CreateIndex
CREATE INDEX "memberships_user_id_idx" ON "memberships"("user_id");

-- CreateIndex
CREATE INDEX "memberships_organization_id_role_idx" ON "memberships"("organization_id", "role");

-- CreateIndex
CREATE INDEX "memberships_organization_id_status_idx" ON "memberships"("organization_id", "status");

-- CreateIndex
CREATE INDEX "memberships_invited_email_idx" ON "memberships"("invited_email");

-- CreateIndex
CREATE INDEX "memberships_deleted_at_idx" ON "memberships"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_organization_id_user_id_key" ON "memberships"("organization_id", "user_id");

-- CreateIndex
CREATE INDEX "_AddressToOrganization_B_index" ON "_AddressToOrganization"("B");

-- CreateIndex
CREATE INDEX "midia_product_id_idx" ON "midia"("product_id");

-- CreateIndex
CREATE INDEX "subdomains_establishment_id_idx" ON "subdomains"("establishment_id");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE INDEX "users_deleted_at_idx" ON "users"("deleted_at");

-- AddForeignKey
ALTER TABLE "auth_accounts" ADD CONSTRAINT "auth_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lgpd_consents" ADD CONSTRAINT "lgpd_consents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lgpd_consents" ADD CONSTRAINT "lgpd_consents_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otps" ADD CONSTRAINT "otps_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "midia" ADD CONSTRAINT "midia_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToOrganization" ADD CONSTRAINT "_AddressToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToOrganization" ADD CONSTRAINT "_AddressToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
