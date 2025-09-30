-- CreateIndex
CREATE INDEX "idx_users_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "idx_users_organization_id" ON "users"("organizationId");

-- CreateIndex
CREATE INDEX "idx_users_is_active" ON "users"("isActive");

-- CreateIndex
CREATE INDEX "idx_users_organization_active" ON "users"("organizationId", "isActive");

-- CreateIndex
CREATE INDEX "idx_organizations_slug" ON "organizations"("slug");

-- CreateIndex
CREATE INDEX "idx_organizations_is_active" ON "organizations"("isActive");

-- CreateIndex
CREATE INDEX "idx_content_organization_id" ON "content"("organizationId");

-- CreateIndex
CREATE INDEX "idx_content_status" ON "content"("status");

-- CreateIndex
CREATE INDEX "idx_content_content_type_id" ON "content"("contentTypeId");

-- CreateIndex
CREATE INDEX "idx_content_published_at" ON "content"("publishedAt");

-- CreateIndex
CREATE INDEX "idx_content_organization_status" ON "content"("organizationId", "status");

-- CreateIndex
CREATE INDEX "idx_content_organization_published" ON "content"("organizationId", "status", "publishedAt");

-- CreateIndex
CREATE INDEX "idx_content_type_organization_id" ON "content_types"("organizationId");

-- CreateIndex
CREATE INDEX "idx_content_type_slug" ON "content_types"("organizationId", "slug");

-- CreateIndex
CREATE INDEX "idx_categories_organization_id" ON "categories"("organizationId");

-- CreateIndex
CREATE INDEX "idx_categories_slug" ON "categories"("organizationId", "slug");

-- CreateIndex
CREATE INDEX "idx_categories_is_active" ON "categories"("isActive");

-- CreateIndex
CREATE INDEX "idx_tags_organization_id" ON "tags"("organizationId");

-- CreateIndex
CREATE INDEX "idx_tags_slug" ON "tags"("organizationId", "slug");

-- CreateIndex
CREATE INDEX "idx_tags_is_active" ON "tags"("isActive");

-- CreateIndex
CREATE INDEX "idx_media_organization_id" ON "media"("organizationId");

-- CreateIndex
CREATE INDEX "idx_media_mime_type" ON "media"("mimeType");

-- CreateIndex
CREATE INDEX "idx_media_created_at" ON "media"("createdAt");

-- CreateIndex
CREATE INDEX "idx_media_organization_created" ON "media"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "idx_content_categories_content_id" ON "content_categories"("contentId");

-- CreateIndex
CREATE INDEX "idx_content_categories_category_id" ON "content_categories"("categoryId");

-- CreateIndex
CREATE INDEX "idx_content_tags_content_id" ON "content_tags"("contentId");

-- CreateIndex
CREATE INDEX "idx_content_tags_tag_id" ON "content_tags"("tagId");

-- CreateIndex
CREATE INDEX "idx_content_media_content_id" ON "content_media"("contentId");

-- CreateIndex
CREATE INDEX "idx_content_media_media_id" ON "content_media"("mediaId");

-- CreateIndex
CREATE INDEX "idx_content_media_field_name" ON "content_media"("fieldName");
