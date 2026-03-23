# Verifierar att de fyra URL:erna som har 404-problem i Google Search Console svarar korrekt

$urls = @(
    "https://ytterman.com/faq",
    "https://ytterman.com/kontakt",
    "https://ytterman.com/energideklaration",
    "https://ytterman.com/guider"
)

Write-Host "`nVerifierar URL:er for Google Search Console indexering..." -ForegroundColor Cyan
Write-Host "=" * 60

$allOk = $true

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $status = $response.StatusCode

        if ($status -eq 200) {
            Write-Host "OK  [$status] $url" -ForegroundColor Green
        } else {
            Write-Host "VARNING [$status] $url" -ForegroundColor Yellow
            $allOk = $false
        }
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        if ($statusCode) {
            Write-Host "FEL [$statusCode] $url" -ForegroundColor Red
        } else {
            Write-Host "FEL [---] $url - $($_.Exception.Message)" -ForegroundColor Red
        }
        $allOk = $false
    }
}

Write-Host "=" * 60

if ($allOk) {
    Write-Host "`nAlla URL:er svarar med 200 OK!" -ForegroundColor Green
    Write-Host "Ga till Google Search Console och begar omindexering for varje URL." -ForegroundColor Cyan
} else {
    Write-Host "`nNagra URL:er har problem. Kontrollera Netlify-deployment." -ForegroundColor Red
    Write-Host "Se till att 'public/_redirects' och 'netlify.toml' ar korrekt konfigurerade." -ForegroundColor Yellow
}

Write-Host ""
