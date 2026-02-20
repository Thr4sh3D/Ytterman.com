# Favicon Setup Guide

## Aktuell Status

Projektet har nu en grundläggande favicon-setup med:
- ✅ `favicon.svg` - Modern SVG-favicon med "Y" i brand-färg (#2563eb)
- ✅ `favicon.ico` - Befintlig ICO-favicon (fungerar som fallback)
- ✅ `site.webmanifest` - PWA manifest med favicon-referenser
- ✅ `manifest.json` - Befintlig PWA manifest
- ✅ `index.html` - Uppdaterad med alla favicon-länkar

## Saknade Bildfiler

För optimal kompabilitet över alla enheter och plattformar behöver följande PNG-filer skapas:

### Standardstorlekar
- `favicon-16x16.png` - För browser tabs (små skärmar)
- `favicon-32x32.png` - För browser tabs (standard)
- `apple-touch-icon.png` (180x180px) - För iOS home screen

### PWA-ikoner
- `favicon-192x192.png` - För Android home screen
- `favicon-512x512.png` - För splash screens och större visningar

## Hur Man Skapar PNG-filer från SVG

### Alternativ 1: Använd Online Favicon Generator (Rekommenderat)

1. Besök [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Ladda upp `public/favicon.svg`
3. Generera och ladda ner alla format
4. Placera filerna i `public/` mappen

### Alternativ 2: Använd ImageMagick (Kommandorad)

```bash
# Installera ImageMagick först: https://imagemagick.org/

# Konvertera SVG till olika PNG-storlekar
magick convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
magick convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
magick convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
magick convert public/favicon.svg -resize 192x192 public/favicon-192x192.png
magick convert public/favicon.svg -resize 512x512 public/favicon-512x512.png
```

### Alternativ 3: Använd Node.js med sharp

```bash
# Installera sharp
npm install --save-dev sharp

# Skapa ett script (generate-favicons.js)
```

```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 }
];

const svgBuffer = fs.readFileSync('./public/favicon.svg');

Promise.all(
  sizes.map(({ name, size }) =>
    sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`./public/${name}`)
  )
).then(() => console.log('Favicons generated successfully!'));
```

```bash
# Kör scriptet
node generate-favicons.js
```

### Alternativ 4: Använd Inkscape (GUI)

1. Installera [Inkscape](https://inkscape.org/)
2. Öppna `public/favicon.svg`
3. File → Export PNG Image
4. Ange bredd och höjd för varje storlek
5. Exportera som motsvarande filename

## Förbättringar av Nuvarande Logo

Den nuvarande `favicon.svg` är en enkel placeholder med "Y". För en mer professionell look, överväg:

1. **Skapa en riktig logotyp** med en designer
2. **Använd befintlig favicon.ico** som källa (om den har högre kvalitet)
3. **Lägg till mer detaljer** i SVG:en (skuggor, gradients, etc.)

## Verifiering

Efter att ha skapat PNG-filerna, verifiera att de fungerar:

1. Bygg projektet: `npm run build`
2. Testa lokalt: `npm run preview`
3. Kontrollera i flera browsers (Chrome, Firefox, Safari, Edge)
4. Testa på mobila enheter (iOS och Android)
5. Använd DevTools för att verifiera att alla länkar laddas korrekt

## Referenser

- [RealFaviconGenerator](https://realfavicongenerator.net/) - Komplett favicon-generator
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) - MDN dokumentation
- [Favicon Cheat Sheet](https://github.com/audreyfeldroy/favicon-cheat-sheet) - Comprehensive guide
