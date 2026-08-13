# Welcome to your Superdev project

## PR-flöde i task-miljön

- Direkt `git push` är spärrat i den här miljön.
- Använd `engine-tools-report_progress` för att commita och skicka upp ändringar.
- Använd `runtime-tools-create_pull_request` när du uttryckligen ska öppna en PR.

## Verifiera senaste GitHub Pages-deploy

1. Öppna repo **Settings → Pages** och använd länken under **Your site is live at**.
2. I sidans footer visas nu `Build: <commit>` (kort SHA) samt byggtid.
3. Matcha commiten mot senaste lyckade run i **Actions → Deploy to GitHub Pages**.
4. Om du fortfarande ser gammal bild: gör hård uppdatering (`Ctrl+F5` på Windows/Linux eller `Cmd+Shift+R` på macOS), eller testa inkognito-fönster.
