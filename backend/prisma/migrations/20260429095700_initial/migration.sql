-- CreateEnum
CREATE TYPE "EntityStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'DELETED');

-- CreateEnum
CREATE TYPE "VisibilityStatus" AS ENUM ('VISIBLE', 'HIDDEN');

-- CreateEnum
CREATE TYPE "YesNoStatus" AS ENUM ('YES', 'NO');

-- CreateEnum
CREATE TYPE "UserLevel" AS ENUM ('OWNER', 'ADMIN', 'AFFILIATE', 'OPERATOR', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CPF', 'CNPJ', 'RG', 'OTHER');

-- CreateEnum
CREATE TYPE "DeliveryMethod" AS ENUM ('DELIVERY', 'PICKUP', 'TABLE', 'OTHER');

-- CreateEnum
CREATE TYPE "DeliveryFeeType" AS ENUM ('FIXED', 'BY_DISTANCE', 'BY_CEP', 'MANUAL');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('MONEY', 'DEBIT_CARD', 'CREDIT_CARD', 'FOOD_CARD', 'PIX', 'ONLINE', 'OTHER');

-- CreateEnum
CREATE TYPE "PaymentGateway" AS ENUM ('MERCADO_PAGO', 'PAGSEGURO', 'GETNET', 'PIX_MANUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ACCEPTED', 'PREPARING', 'READY', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELED');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('PENDING', 'ACTIVE', 'EXPIRED', 'CANCELED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "SubscriptionMode" AS ENUM ('TRIAL', 'PAID', 'VOUCHER', 'MANUAL');

-- CreateEnum
CREATE TYPE "VoucherStatus" AS ENUM ('UNUSED', 'USED', 'EXPIRED', 'CANCELED');

-- CreateEnum
CREATE TYPE "BannerScope" AS ENUM ('STORE', 'MARKETPLACE');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('PRODUCT', 'CATEGORY', 'STORE', 'BANNER', 'OTHER');

-- CreateEnum
CREATE TYPE "DomainType" AS ENUM ('STORE', 'MARKETPLACE', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ScheduleAction" AS ENUM ('OPEN', 'CLOSE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "password_hash" VARCHAR(255),
    "level" "UserLevel" NOT NULL DEFAULT 'OPERATOR',
    "operation" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "recover_key" VARCHAR(255),
    "keepalive" VARCHAR(255),
    "commission" VARCHAR(255),
    "created_at" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_data" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "birth_date" VARCHAR(255),
    "document_type" "DocumentType",
    "document" VARCHAR(255),
    "state_id" VARCHAR(255),
    "city_id" VARCHAR(255),
    "phone" VARCHAR(255),
    "commission" VARCHAR(255),

    CONSTRAINT "users_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" UUID NOT NULL,
    "name" VARCHAR(75),
    "uf" VARCHAR(5),

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" UUID NOT NULL,
    "name" VARCHAR(120),
    "state_id" UUID,
    "subdomain" VARCHAR(255),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "segments" (
    "id" UUID NOT NULL,
    "icon" VARCHAR(255),
    "name" VARCHAR(75),
    "age_rating" VARCHAR(255),

    CONSTRAINT "segments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishments" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "segment_id" UUID,
    "license_id" INTEGER NOT NULL DEFAULT 0,
    "onesignal_id" VARCHAR(150),
    "affiliate" VARCHAR(255),
    "name" VARCHAR(255),
    "description" TEXT,
    "subdomain" VARCHAR(255),
    "profile_image" VARCHAR(255),
    "cover_image" VARCHAR(255),
    "theme_color" VARCHAR(255),
    "email" VARCHAR(255),
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "status_force" VARCHAR(255),
    "operation_status" VARCHAR(255),
    "expiration_status" VARCHAR(255) DEFAULT '1',
    "excluded" VARCHAR(255),
    "excluded_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3),
    "last_modified" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),

    CONSTRAINT "establishments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "user_id" UUID,
    "customer_id" UUID,
    "state_id" UUID,
    "city_id" UUID,
    "state_legacy" VARCHAR(255),
    "city_legacy" VARCHAR(255),
    "zip_code" VARCHAR(255),
    "address_number" VARCHAR(255),
    "neighborhood" VARCHAR(255),
    "street" VARCHAR(255),
    "complement" VARCHAR(255),
    "reference" VARCHAR(255),
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishment_contact" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "whatsapp" VARCHAR(255),
    "email" VARCHAR(255),
    "instagram" VARCHAR(255),
    "facebook" VARCHAR(255),
    "youtube" VARCHAR(255),

    CONSTRAINT "establishment_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishment_settings" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "minimum_order" DECIMAL(10,2),
    "payment_cash" "YesNoStatus",
    "payment_debit_card" "YesNoStatus",
    "payment_debit_card_brands" VARCHAR(255),
    "payment_credit_card" "YesNoStatus",
    "payment_credit_card_brands" VARCHAR(255),
    "payment_food_card" "YesNoStatus",
    "payment_food_card_brands" VARCHAR(255),
    "payment_other" "YesNoStatus",
    "payment_other_description" VARCHAR(255),
    "payment_pix" "YesNoStatus",
    "pix_type" VARCHAR(255),
    "pix_key" VARCHAR(99),
    "pix_beneficiary" VARCHAR(25),
    "establishment_pix_data" TEXT,
    "business_hours_text" TEXT,
    "business_hours_json" TEXT,
    "pickup_enabled_legacy" "YesNoStatus",
    "delivery_enabled_legacy" "YesNoStatus",
    "delivery_fee_type" "DeliveryFeeType",
    "delivery_fee_value" DECIMAL(10,2),
    "product_limit" VARCHAR(255),
    "display_mode" VARCHAR(11) DEFAULT '1',
    "delivery_name" VARCHAR(255) DEFAULT 'Delivery',
    "pickup_name" VARCHAR(255) DEFAULT 'Retirada no Balcão',
    "table_name" VARCHAR(255) DEFAULT 'Mesa',
    "delivery" "YesNoStatus" NOT NULL DEFAULT 'YES',
    "pickup_enabled" "YesNoStatus" NOT NULL DEFAULT 'YES',
    "table_enabled" "YesNoStatus" NOT NULL DEFAULT 'YES',
    "other_enabled" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "other_name" VARCHAR(255),
    "calculate_shipping" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "shipping_type" "DeliveryFeeType",
    "shipping_company" VARCHAR(150),
    "shipping_password" VARCHAR(50),
    "validity" INTEGER NOT NULL DEFAULT 0,
    "trigger_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "establishment_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishment_flags" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "marketplace_feature" "YesNoStatus",
    "variation_feature" "YesNoStatus",
    "banner_feature" "YesNoStatus",
    "trigger_feature" "YesNoStatus" NOT NULL DEFAULT 'YES',

    CONSTRAINT "establishment_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishment_integrations" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "analytics_code" VARCHAR(255),
    "pixel_code" VARCHAR(255),
    "html" TEXT,
    "token" VARCHAR(250),
    "access_token" VARCHAR(250),
    "mercado_pago_payment" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "mercado_pago_sandbox" BOOLEAN NOT NULL DEFAULT false,
    "mercado_pago_public_key" VARCHAR(200),
    "mercado_pago_secret_key" VARCHAR(200),
    "pagseguro_payment" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "pagseguro_sandbox" BOOLEAN NOT NULL DEFAULT false,
    "pagseguro_email" VARCHAR(200),
    "pagseguro_token" VARCHAR(200),
    "mercado_pago_pix_payment" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "mercado_pago_pix_token" VARCHAR(100),
    "getnet_payment" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "getnet_sandbox" BOOLEAN NOT NULL DEFAULT false,
    "getnet_client_id" VARCHAR(200),
    "getnet_client_secret" VARCHAR(200),
    "getnet_seller_id" VARCHAR(200),

    CONSTRAINT "establishment_integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishment_responsibles" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "responsible_name" VARCHAR(255),
    "responsible_birth_date" VARCHAR(255),
    "responsible_document_type" "DocumentType",
    "responsible_document" VARCHAR(255),

    CONSTRAINT "establishment_responsibles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "sun" BOOLEAN,
    "mon" BOOLEAN,
    "tue" BOOLEAN,
    "wed" BOOLEAN,
    "thu" BOOLEAN,
    "fri" BOOLEAN,
    "sat" BOOLEAN,
    "time" VARCHAR(255),
    "action" "ScheduleAction",

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "sort_order" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "visible" "VisibilityStatus",
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "last_modified" TIMESTAMP(3),
    "domingo" BOOLEAN NOT NULL DEFAULT true,
    "segunda" BOOLEAN NOT NULL DEFAULT true,
    "terca" BOOLEAN NOT NULL DEFAULT true,
    "quarta" BOOLEAN NOT NULL DEFAULT true,
    "quinta" BOOLEAN NOT NULL DEFAULT true,
    "sexta" BOOLEAN NOT NULL DEFAULT true,
    "sabado" BOOLEAN NOT NULL DEFAULT true,
    "feriados" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "category_id" UUID,
    "featured" "YesNoStatus",
    "ref" VARCHAR(255),
    "pdv_code" INTEGER,
    "points" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "allow_exchange" BOOLEAN NOT NULL DEFAULT false,
    "item_points" INTEGER NOT NULL DEFAULT 0,
    "name" VARCHAR(255),
    "video_link" VARCHAR(255),
    "description" TEXT,
    "value" DECIMAL(10,2),
    "offer" "YesNoStatus",
    "promotional_value" DECIMAL(10,2),
    "variation_json" TEXT,
    "visible" "VisibilityStatus",
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "public_status" VARCHAR(2) DEFAULT '1',
    "integrated" VARCHAR(255),
    "shipping_weight" DOUBLE PRECISION,
    "shipping_height" DOUBLE PRECISION,
    "shipping_width" DOUBLE PRECISION,
    "shipping_length" DOUBLE PRECISION,
    "shipping_diameter" DOUBLE PRECISION,
    "stock_enabled" "YesNoStatus" NOT NULL DEFAULT 'YES',
    "position" VARCHAR(9) DEFAULT '0',
    "created_at" TIMESTAMP(3),
    "last_modified" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banners" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "title" VARCHAR(255),
    "desktop_image" VARCHAR(255),
    "mobile_image" VARCHAR(255),
    "video_link" VARCHAR(255),
    "link" VARCHAR(255),
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3),
    "last_modified" TIMESTAMP(3),

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketplace_banners" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "city_id" UUID,
    "title" VARCHAR(255),
    "desktop_image" VARCHAR(255),
    "mobile_image" VARCHAR(255),
    "video_link" VARCHAR(255),
    "link" VARCHAR(255),
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3),
    "last_modified" TIMESTAMP(3),

    CONSTRAINT "marketplace_banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "city_id" UUID,
    "greeting_count" INTEGER NOT NULL DEFAULT 0,
    "last_message" TEXT,
    "name" VARCHAR(150),
    "timestamp" VARCHAR(255),
    "sts_disparador" "YesNoStatus" NOT NULL DEFAULT 'YES',
    "datadeinclusao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "whatsapp" VARCHAR(15),
    "shipping_password" VARCHAR(35),
    "qtdpontos" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pontos_op" TEXT,
    "qtdpedidos" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN,
    "cep" VARCHAR(15),
    "rua" VARCHAR(250),
    "numero" VARCHAR(15),
    "bairro" VARCHAR(150),
    "uf" INTEGER,
    "complemento" VARCHAR(250),
    "payment_reference" VARCHAR(250),
    "p256dh" VARCHAR(350),
    "auth" VARCHAR(250),
    "endpoint" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupons" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "name" VARCHAR(255),
    "description" TEXT,
    "code" VARCHAR(255),
    "type" VARCHAR(255),
    "desconto_porcentagem" VARCHAR(255),
    "desconto_fixo" DECIMAL(10,2),
    "valor_maximo" DECIMAL(10,2),
    "quantidade" VARCHAR(255),
    "validity" TIMESTAMP(3),

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freights" (
    "id" UUID NOT NULL,
    "establishment_id" UUID,
    "name" VARCHAR(255),
    "value" DECIMAL(10,2),
    "other_enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "freights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "impressao" (
    "id" UUID NOT NULL,
    "ide" VARCHAR(9),
    "status" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "token" VARCHAR(255),

    CONSTRAINT "impressao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link" (
    "id" UUID NOT NULL,
    "link" VARCHAR(550),
    "name" VARCHAR(255),

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "rel_lojas_id" UUID,
    "info" TEXT,
    "date_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "midia" (
    "id" UUID NOT NULL,
    "type" "MediaType",
    "establishment_id" UUID,
    "related_id" UUID,
    "url" VARCHAR(255),

    CONSTRAINT "midia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "license_id" INTEGER,
    "rel_segmentos_id" UUID,
    "establishment_id" UUID,
    "name" VARCHAR(255),
    "whatsapp" VARCHAR(255),
    "delivery_method" "DeliveryMethod",
    "state_id" VARCHAR(255),
    "city_id" VARCHAR(255),
    "zip_code" VARCHAR(255),
    "address_number" VARCHAR(255),
    "neighborhood" VARCHAR(255),
    "street" VARCHAR(255),
    "complement" VARCHAR(255),
    "reference" VARCHAR(255),
    "payment_method" "PaymentMethod",
    "payment_info" VARCHAR(255),
    "receipt" TEXT,
    "payload_json" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "ordered_at" TIMESTAMP(3),
    "coupon" VARCHAR(255),
    "order_value" DECIMAL(10,2),
    "fee" DOUBLE PRECISION,
    "table_enabled" INTEGER,
    "public_status" VARCHAR(2) NOT NULL DEFAULT '1',
    "integrated" INTEGER,
    "message" VARCHAR(250),
    "payment_link" VARCHAR(400),
    "payment_reference" VARCHAR(120),
    "paid_at" TIMESTAMP(3),
    "payment_status" "PaymentStatus",
    "payment_type" VARCHAR(25),
    "payment_details" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" UUID NOT NULL,
    "establishment_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "date" VARCHAR(200) NOT NULL,
    "time" VARCHAR(200) NOT NULL,
    "value" VARCHAR(200) NOT NULL,
    "gateway" "PaymentGateway" NOT NULL,
    "code" VARCHAR(200) NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" UUID NOT NULL,
    "featured" "YesNoStatus",
    "name" VARCHAR(255),
    "description" TEXT,
    "commission" VARCHAR(255),
    "duration_months" VARCHAR(255),
    "duration_days" VARCHAR(255),
    "total_value" DECIMAL(10,2),
    "monthly_value" DECIMAL(10,2),
    "link" VARCHAR(255),
    "terms" TEXT,
    "marketplace_feature" "YesNoStatus",
    "variation_feature" "YesNoStatus",
    "banner_feature" "YesNoStatus",
    "trigger_feature" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "visible" "VisibilityStatus",
    "status" "EntityStatus" NOT NULL DEFAULT 'ACTIVE',
    "sort_order" VARCHAR(255),
    "product_limit" VARCHAR(255),

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" UUID NOT NULL,
    "plan_id" UUID,
    "establishment_id" UUID,
    "establishment_name" VARCHAR(255),
    "establishment_subdomain" VARCHAR(255),
    "affiliate" VARCHAR(255),
    "name" VARCHAR(255),
    "description" TEXT,
    "commission" VARCHAR(255),
    "duration_months" VARCHAR(255),
    "duration_days" VARCHAR(255),
    "total_value" DECIMAL(10,2),
    "received_value" DECIMAL(10,2),
    "monthly_value" DECIMAL(10,2),
    "terms" TEXT,
    "trigger_feature" "YesNoStatus" NOT NULL DEFAULT 'NO',
    "marketplace_feature" "YesNoStatus",
    "variation_feature" "YesNoStatus",
    "banner_feature" "YesNoStatus",
    "gateway_ref" VARCHAR(255),
    "gateway_link" VARCHAR(255),
    "gateway_transaction" VARCHAR(255),
    "gateway_payable" DATE,
    "gateway_expiration" DATE,
    "gateway_payment" VARCHAR(255),
    "mode" "SubscriptionMode",
    "voucher_code" VARCHAR(255),
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'PENDING',
    "used" BOOLEAN,
    "expiration" DATE,
    "created_at" TIMESTAMP(3),
    "excluded" VARCHAR(255),
    "product_limit" VARCHAR(255),

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vouchers" (
    "id" UUID NOT NULL,
    "plan_id" UUID,
    "subscription_id" UUID,
    "description" VARCHAR(255),
    "code" VARCHAR(255),
    "status" "VoucherStatus" NOT NULL DEFAULT 'UNUSED',
    "affiliate" VARCHAR(5),

    CONSTRAINT "vouchers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subdomains" (
    "id" UUID NOT NULL,
    "related_id" UUID,
    "type" "DomainType",
    "subdomain" VARCHAR(255),
    "url" VARCHAR(255),

    CONSTRAINT "subdomains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validities" (
    "id" UUID NOT NULL,
    "day" VARCHAR(550) NOT NULL DEFAULT '1',
    "month" VARCHAR(550),
    "year" VARCHAR(550),
    "product_id" UUID,
    "establishment_id" UUID NOT NULL,
    "quantity" VARCHAR(550) DEFAULT '-1',

    CONSTRAINT "validities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE UNIQUE INDEX "users_data_user_id_key" ON "users_data"("user_id");

-- CreateIndex
CREATE INDEX "users_data_document_idx" ON "users_data"("document");

-- CreateIndex
CREATE UNIQUE INDEX "states_uf_key" ON "states"("uf");

-- CreateIndex
CREATE INDEX "cities_state_id_idx" ON "cities"("state_id");

-- CreateIndex
CREATE INDEX "cities_subdomain_idx" ON "cities"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "establishments_subdomain_key" ON "establishments"("subdomain");

-- CreateIndex
CREATE INDEX "establishments_user_id_idx" ON "establishments"("user_id");

-- CreateIndex
CREATE INDEX "establishments_segment_id_idx" ON "establishments"("segment_id");

-- CreateIndex
CREATE INDEX "establishments_status_idx" ON "establishments"("status");

-- CreateIndex
CREATE INDEX "establishments_subdomain_idx" ON "establishments"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_establishment_id_key" ON "addresses"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_user_id_key" ON "addresses"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_customer_id_key" ON "addresses"("customer_id");

-- CreateIndex
CREATE INDEX "addresses_establishment_id_idx" ON "addresses"("establishment_id");

-- CreateIndex
CREATE INDEX "addresses_user_id_idx" ON "addresses"("user_id");

-- CreateIndex
CREATE INDEX "addresses_customer_id_idx" ON "addresses"("customer_id");

-- CreateIndex
CREATE INDEX "addresses_state_id_idx" ON "addresses"("state_id");

-- CreateIndex
CREATE INDEX "addresses_city_id_idx" ON "addresses"("city_id");

-- CreateIndex
CREATE UNIQUE INDEX "establishment_contact_establishment_id_key" ON "establishment_contact"("establishment_id");

-- CreateIndex
CREATE INDEX "establishment_contact_establishment_id_idx" ON "establishment_contact"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "establishment_settings_establishment_id_key" ON "establishment_settings"("establishment_id");

-- CreateIndex
CREATE INDEX "establishment_settings_establishment_id_idx" ON "establishment_settings"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "establishment_flags_establishment_id_key" ON "establishment_flags"("establishment_id");

-- CreateIndex
CREATE INDEX "establishment_flags_establishment_id_idx" ON "establishment_flags"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "establishment_integrations_establishment_id_key" ON "establishment_integrations"("establishment_id");

-- CreateIndex
CREATE INDEX "establishment_integrations_establishment_id_idx" ON "establishment_integrations"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "establishment_responsibles_establishment_id_key" ON "establishment_responsibles"("establishment_id");

-- CreateIndex
CREATE INDEX "establishment_responsibles_establishment_id_idx" ON "establishment_responsibles"("establishment_id");

-- CreateIndex
CREATE INDEX "schedules_establishment_id_idx" ON "schedules"("establishment_id");

-- CreateIndex
CREATE INDEX "categories_establishment_id_idx" ON "categories"("establishment_id");

-- CreateIndex
CREATE INDEX "categories_status_idx" ON "categories"("status");

-- CreateIndex
CREATE INDEX "products_establishment_id_idx" ON "products"("establishment_id");

-- CreateIndex
CREATE INDEX "products_category_id_idx" ON "products"("category_id");

-- CreateIndex
CREATE INDEX "products_status_idx" ON "products"("status");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "banners_establishment_id_idx" ON "banners"("establishment_id");

-- CreateIndex
CREATE INDEX "banners_status_idx" ON "banners"("status");

-- CreateIndex
CREATE INDEX "marketplace_banners_establishment_id_idx" ON "marketplace_banners"("establishment_id");

-- CreateIndex
CREATE INDEX "marketplace_banners_city_id_idx" ON "marketplace_banners"("city_id");

-- CreateIndex
CREATE INDEX "marketplace_banners_status_idx" ON "marketplace_banners"("status");

-- CreateIndex
CREATE INDEX "customers_establishment_id_idx" ON "customers"("establishment_id");

-- CreateIndex
CREATE INDEX "customers_city_id_idx" ON "customers"("city_id");

-- CreateIndex
CREATE INDEX "customers_whatsapp_idx" ON "customers"("whatsapp");

-- CreateIndex
CREATE INDEX "coupons_establishment_id_idx" ON "coupons"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "coupons_establishment_id_code_key" ON "coupons"("establishment_id", "code");

-- CreateIndex
CREATE INDEX "freights_establishment_id_idx" ON "freights"("establishment_id");

-- CreateIndex
CREATE INDEX "logs_user_id_idx" ON "logs"("user_id");

-- CreateIndex
CREATE INDEX "logs_rel_lojas_id_idx" ON "logs"("rel_lojas_id");

-- CreateIndex
CREATE INDEX "midia_establishment_id_idx" ON "midia"("establishment_id");

-- CreateIndex
CREATE INDEX "midia_related_id_idx" ON "midia"("related_id");

-- CreateIndex
CREATE INDEX "orders_establishment_id_idx" ON "orders"("establishment_id");

-- CreateIndex
CREATE INDEX "orders_status_idx" ON "orders"("status");

-- CreateIndex
CREATE INDEX "orders_ordered_at_idx" ON "orders"("ordered_at");

-- CreateIndex
CREATE INDEX "orders_whatsapp_idx" ON "orders"("whatsapp");

-- CreateIndex
CREATE INDEX "payments_establishment_id_idx" ON "payments"("establishment_id");

-- CreateIndex
CREATE INDEX "payments_order_id_idx" ON "payments"("order_id");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "payments"("status");

-- CreateIndex
CREATE INDEX "plans_status_idx" ON "plans"("status");

-- CreateIndex
CREATE INDEX "subscriptions_plan_id_idx" ON "subscriptions"("plan_id");

-- CreateIndex
CREATE INDEX "subscriptions_establishment_id_idx" ON "subscriptions"("establishment_id");

-- CreateIndex
CREATE INDEX "subscriptions_status_idx" ON "subscriptions"("status");

-- CreateIndex
CREATE INDEX "subscriptions_expiration_idx" ON "subscriptions"("expiration");

-- CreateIndex
CREATE INDEX "vouchers_plan_id_idx" ON "vouchers"("plan_id");

-- CreateIndex
CREATE INDEX "vouchers_subscription_id_idx" ON "vouchers"("subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "vouchers_code_key" ON "vouchers"("code");

-- CreateIndex
CREATE INDEX "subdomains_related_id_idx" ON "subdomains"("related_id");

-- CreateIndex
CREATE INDEX "subdomains_subdomain_idx" ON "subdomains"("subdomain");

-- CreateIndex
CREATE INDEX "validities_establishment_id_idx" ON "validities"("establishment_id");

-- CreateIndex
CREATE INDEX "validities_product_id_idx" ON "validities"("product_id");

-- AddForeignKey
ALTER TABLE "users_data" ADD CONSTRAINT "users_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishments" ADD CONSTRAINT "establishments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishments" ADD CONSTRAINT "establishments_segment_id_fkey" FOREIGN KEY ("segment_id") REFERENCES "segments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishment_contact" ADD CONSTRAINT "establishment_contact_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishment_settings" ADD CONSTRAINT "establishment_settings_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishment_flags" ADD CONSTRAINT "establishment_flags_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishment_integrations" ADD CONSTRAINT "establishment_integrations_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishment_responsibles" ADD CONSTRAINT "establishment_responsibles_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketplace_banners" ADD CONSTRAINT "marketplace_banners_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupons" ADD CONSTRAINT "coupons_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freights" ADD CONSTRAINT "freights_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_rel_lojas_id_fkey" FOREIGN KEY ("rel_lojas_id") REFERENCES "establishments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "midia" ADD CONSTRAINT "midia_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "midia" ADD CONSTRAINT "midia_related_id_fkey" FOREIGN KEY ("related_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vouchers" ADD CONSTRAINT "vouchers_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vouchers" ADD CONSTRAINT "vouchers_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validities" ADD CONSTRAINT "validities_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validities" ADD CONSTRAINT "validities_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
