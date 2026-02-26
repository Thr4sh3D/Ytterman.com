#!/usr/bin/env pwsh
# Test script for verifying redirects and URL configurations
# Run after deployment to validate SEO fixes

Write-Host "`n🔍 Testing URL Redirects and Status Codes for ytterman.com" -ForegroundColor Cyan
Write-Host "=" * 70 -ForegroundColor Gray

$testResults = @()
$domain = "ytterman.com"

function Test-Url {
    param(
        [string]$Url,
        [int]$ExpectedStatus,
        [string]$ExpectedLocation = $null,
        [string]$Description
    )
    
    Write-Host "`n📌 Testing: $Description" -ForegroundColor Yellow
    Write-Host "   URL: $Url" -ForegroundColor Gray
    
    try {
        # Use curl for more accurate results (available on Windows 10+)
        if (Get-Command curl.exe -ErrorAction SilentlyContinue) {
            $response = curl.exe -sI -L -m 10 $Url 2>&1
            $statusLine = ($response | Select-String "HTTP/" | Select-Object -First 1).ToString()
            $locationLine = ($response | Select-String "^[Ll]ocation:" | Select-Object -First 1).ToString()
            
            if ($statusLine -match "(\d{3})") {
                $status = [int]$Matches[1]
            } else {
                $status = 0
            }
            
            if ($locationLine -match "location:\s*(.+)$") {
                $location = $Matches[1].Trim()
            } else {
                $location = $null
            }
        }
        else {
            # Fallback to Invoke-WebRequest
            $response = Invoke-WebRequest -Uri $Url -Method Head -MaximumRedirection 0 -ErrorAction SilentlyContinue
            $status = $response.StatusCode
            $location = $response.Headers.Location
        }
        
        $passed = $status -eq $ExpectedStatus
        
        if ($ExpectedLocation -and $location) {
            # Normalize URLs for comparison
            $normalizedLocation = $location -replace "/$", ""
            $normalizedExpected = $ExpectedLocation -replace "/$", ""
            $locationMatch = $normalizedLocation -eq $normalizedExpected
            $passed = $passed -and $locationMatch
        }
        
        if ($passed) {
            Write-Host "   ✅ PASS - Status: $status" -ForegroundColor Green
            if ($location) {
                Write-Host "   📍 Redirects to: $location" -ForegroundColor Green
            }
        }
        else {
            Write-Host "   ❌ FAIL - Status: $status (Expected: $ExpectedStatus)" -ForegroundColor Red
            if ($ExpectedLocation -and $location) {
                Write-Host "   📍 Redirects to: $location (Expected: $ExpectedLocation)" -ForegroundColor Red
            }
            elseif ($ExpectedLocation) {
                Write-Host "   ⚠️  No redirect found (Expected: $ExpectedLocation)" -ForegroundColor Red
            }
        }
        
        $testResults += @{
            Description = $Description
            URL = $Url
            Status = $status
            Expected = $ExpectedStatus
            Location = $location
            Passed = $passed
        }
        
    }
    catch {
        Write-Host "   ❌ ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $testResults += @{
            Description = $Description
            URL = $Url
            Status = "Error"
            Expected = $ExpectedStatus
            Location = $null
            Passed = $false
        }
    }
}

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "1️⃣  HTTPS & WWW Redirect Tests" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

# Note: GitHub Pages handles http->https automatically
# www->non-www must be configured via DNS (not testable via curl from code)
Test-Url -Url "https://$domain/" `
    -ExpectedStatus 200 `
    -Description "Canonical URL (https://ytterman.com/) - Should return 200 OK"

# These tests will show current behavior - user must configure DNS for www redirects
Write-Host "`n⚠️  Note: www redirects must be configured via DNS settings" -ForegroundColor Yellow
Write-Host "   Current DNS settings:" -ForegroundColor Gray
try {
    $dnsResult = Resolve-DnsName -Name "www.$domain" -ErrorAction SilentlyContinue
    if ($dnsResult) {
        Write-Host "   www.$domain resolves to:" -ForegroundColor Gray
        $dnsResult | ForEach-Object {
            Write-Host "   - $($_.Name) -> $($_.IPAddress)" -ForegroundColor Gray
        }
    }
}
catch {
    Write-Host "   (DNS lookup failed - may not be configured)" -ForegroundColor Gray
}

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "2️⃣  Previously 404 Pages Test" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

Test-Url -Url "https://$domain/guider/bas-u-guide" `
    -ExpectedStatus 200 `
    -Description "/guider/bas-u-guide - Should now return 200 OK"

Test-Url -Url "https://$domain/omraden" `
    -ExpectedStatus 200 `
    -Description "/omraden - Should now return 200 OK"

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "3️⃣  Important Pages Test" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

Test-Url -Url "https://$domain/tjanster" `
    -ExpectedStatus 200 `
    -Description "/tjanster"

Test-Url -Url "https://$domain/guider" `
    -ExpectedStatus 200 `
    -Description "/guider"

Test-Url -Url "https://$domain/kontakt" `
    -ExpectedStatus 200 `
    -Description "/kontakt"

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "4️⃣  SEO Resources Test" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

Test-Url -Url "https://$domain/sitemap.xml" `
    -ExpectedStatus 200 `
    -Description "sitemap.xml"

Test-Url -Url "https://$domain/robots.txt" `
    -ExpectedStatus 200 `
    -Description "robots.txt"

# Summary
Write-Host "`n" + ("=" * 70) -ForegroundColor Gray
Write-Host "📊 Test Summary" -ForegroundColor Cyan
Write-Host ("=" * 70) -ForegroundColor Gray

$passed = ($testResults | Where-Object { $_.Passed }).Count
$failed = ($testResults | Where-Object { -not $_.Passed }).Count
$total = $testResults.Count

Write-Host "`n   Total Tests: $total" -ForegroundColor White
Write-Host "   ✅ Passed: $passed" -ForegroundColor Green
Write-Host "   ❌ Failed: $failed" -ForegroundColor Red

if ($failed -eq 0) {
    Write-Host "`n🎉 All tests passed! Site is properly configured." -ForegroundColor Green
}
else {
    Write-Host "`n⚠️  Some tests failed. Review errors above." -ForegroundColor Yellow
}

Write-Host "`n💡 Next Steps:" -ForegroundColor Cyan
Write-Host "   1. If www redirects fail, configure DNS CNAME: www -> ytterman.com" -ForegroundColor Gray
Write-Host "   2. Enable 'Enforce HTTPS' in GitHub Pages settings" -ForegroundColor Gray
Write-Host "   3. Run URL Inspection in Google Search Console for fixed URLs" -ForegroundColor Gray
Write-Host "   4. Request re-indexing for /guider/bas-u-guide and /omraden" -ForegroundColor Gray
Write-Host "   5. Monitor Search Console for 'Page with redirect' issues (should resolve)" -ForegroundColor Gray
Write-Host ""
