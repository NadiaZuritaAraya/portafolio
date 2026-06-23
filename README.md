# Portafolio Nadia Zurita — Data Engineer

Stack: React + Vite · Firebase Firestore · Cloud Functions · Vercel

---

## Arquitectura

```
portfolio-nadia/
├── src/
│   ├── components/
│   │   ├── ui/                  # Badge, SkillTag, ParticleCanvas
│   │   └── sections/            # HeroSection, StatsSection, StackSection
│   ├── pages/                   # LandingPage, AccessPage, PortfolioPage
│   ├── hooks/                   # useAccessRequest, useTokenValidation
│   ├── services/                # firebaseService, emailService
│   ├── utils/                   # tokenUtils
│   ├── constants/               # colores, stack, skills, rutas
│   └── styles/                  # globals.css
├── functions/                   # Cloud Functions (Node 20)
│   ├── requestAccess.js         # Genera token + envía email
│   ├── cleanupTokens.js         # Cron: purga tokens expirados
│   └── index.js
├── .env.example
├── firebase.json
├── firestore.rules
└── vite.config.js
```

## Flujo de acceso

1. Visitante ingresa su email en la landing.
2. `createAccessRequest()` escribe en `access_requests/{email}`.
3. La Cloud Function `requestAccess` detecta el doc, genera un UUID, lo guarda en `access_tokens/{token}` con `expireAt = now + 24h` y envía el email con el link.
4. El visitante hace clic en `https://tudominio.com/access?token=UUID`.
5. `useTokenValidation` llama a `validateToken(token)`:
   - Verifica existencia, `used` y `expireAt`.
   - Si válido: marca `used = true`, guarda un `portfolio_view` y redirige a `/portfolio`.
   - Si inválido: muestra el error.
6. `cleanupTokens` corre cada hora y borra tokens con `expireAt < now`.

---

## Instalación local

```bash
# 1. Clonar e instalar frontend
npm install

# 2. Copiar variables de entorno
cp .env.example .env
# Completar con tus credenciales de Firebase y Resend

# 3. Instalar dependencias de functions
cd functions && npm install && cd ..

# 4. Correr en desarrollo
npm run dev
```

## Deploy

### Vercel (frontend)
```bash
npm run build
# Conectar el repo en vercel.com → auto-deploy
# Agregar las variables VITE_* en Settings → Environment Variables
```

### Firebase Functions
```bash
firebase login
firebase use --add   # selecciona tu proyecto
firebase deploy --only functions,firestore:rules
```

### Variables de Cloud Functions
```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set APP_URL
firebase functions:secrets:set FROM_EMAIL
```

---

## Servicios externos necesarios

| Servicio | Uso | Plan gratuito |
|---|---|---|
| Firebase Firestore | Base de datos tokens | Spark (gratis) |
| Firebase Functions | Backend serverless | 2M invocaciones/mes |
| Resend | Envío de emails | 3000 emails/mes |
| Vercel | Hosting frontend | Hobby (gratis) |

---

## Próximas secciones (portafolio privado)

- Cards de proyectos con filtro por tecnología
- Casos de estudio con arquitecturas GCP/AWS
- Botón de acceso a GitLab/GitHub (manual por ti)
- CV descargable en PDF
