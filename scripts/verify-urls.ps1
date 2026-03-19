# PowerShell script för att verifiera att alla viktiga sidor är tillgängliga
# Detta script testar att alla URL:er som rapporteras som 404 i Google Search Console faktiskt fungerar

$baseUrl = "https://ytterman.com"
$urls = @(
    "/faq",
    "/kontakt",
    "/energideklaration",
    "/guider",
    "/bas-u",
    "/omraden",
    "/guider/bas-u-guide"
)

Write-Host "🔍 Testar URL:er för ytterman.com..." -ForegroundColor Cyan
Write-Host "=" * 60
Write-Host ""

$results = @()

foreach ($url in $urls) {
    $fullUrl = "$baseUrl$url"
    
    try {
        Write-Host "Testar: $fullUrl" -NoNewline
        
        # Gör HTTP-förfrågan
        $response = Invoke-WebRequest -Uri $fullUrl -Method Head -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
        
        $statusCode = $response.StatusCode
        
        if ($statusCode -eq 200) {
            Write-Host " ✅ OK ($statusCode)" -ForegroundColor Green
            $results += [PSCustomObject]@{
                URL = $fullUrl
                Status = $statusCode
                Result = "✅ OK"
            }
        } else {
            Write-Host " ⚠️ $statusCode" -ForegroundColor Yellow
            $results += [PSCustomObject]@{
                URL = $fullUrl
                Status = $statusCode
                Result = "⚠️ Varning"
            }
        }
    }
    catch {
        $statusCode = $_.Exception.Response.StatusCode.Value__
        Write-Host " ❌ FAILED ($statusCode)" -ForegroundColor Red
        $results += [PSCustomObject]@{
            URL = $fullUrl
            Status = $statusCode
            Result = "❌ Fel"
        }
    }
    
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "=" * 60
Write-Host "📊 Sammanfattning:" -ForegroundColor Cyan
Write-Host ""

$results | Format-Table -AutoSize

$okCount = ($results | Where-Object { $_.Status -eq 200 }).Count
$totalCount = $results.Count

Write-Host ""
Write-Host "Resultat: $okCount/$totalCount sidor tillgängliga" -ForegroundColor $(if ($okCount -eq $totalCount) { "Green" } else { "Yellow" })

if ($okCount -eq $totalCount) {
    Write-Host ""
    Write-Host "✅ Alla sidor fungerar korrekt!" -ForegroundColor Green
    Write-Host "   Nästa steg: Begär re-indexering i Google Search Console" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "⚠️ Några sidor returnerar fel statuskoder" -ForegroundColor Yellow
    Write-Host "   Detta kan bero på temporära problem eller cache" -ForegroundColor White
}

Write-Host ""
Write-Host "💡 Tips för Google Search Console:" -ForegroundColor Cyan
Write-Host "   1. Öppna: https://search.google.com/search-console" -ForegroundColor White
Write-Host "   2. Välj: Indexering > Sidor > Hittades inte (404)" -ForegroundColor White
Write-Host "   3. För varje URL: Testa live-version → Begär indexering" -ForegroundColor White
Write-Host ""
