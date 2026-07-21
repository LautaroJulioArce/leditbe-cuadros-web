# Deploy script for landing page to S3 and CloudFront
# Usage: .\deploy.ps1

param(
    [string]$BucketName = "landing-page-cuadros-led-lautaro",
    [string]$DistributionId = "E1BDZM9BEE3CKV"
)

Write-Output "🚀 Starting deployment..."

# Step 1: Build
Write-Output "`n📦 Building..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Output "❌ Build failed"
    exit 1
}
Write-Output "✅ Build completed"

# Step 2: Sync to S3
Write-Output "`n📤 Uploading to S3..."
aws s3 sync dist/ s3://$BucketName --delete --only-show-errors
if ($LASTEXITCODE -ne 0) {
    Write-Output "❌ S3 sync failed"
    exit 1
}
Write-Output "✅ S3 sync completed"

# Step 3: Invalidate CloudFront
Write-Output "`n♻️  Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*" --output json | ConvertFrom-Json | Select-Object -ExpandProperty Invalidation | Select-Object Id, Status
Write-Output "✅ CloudFront invalidation submitted"

Write-Output "`n🎉 Deployment completed!"
Write-Output "🌐 Site: https://dpinkajnni387.cloudfront.net"
