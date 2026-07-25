# Scena — Dashboard (partie Mamadou Kende)

Dashboard de gestion d'événements : cards "Mes événements", table participants,
composants réutilisables, routes protégées.

## Installation en local

```bash
npm install
npm run dev
```

Ouvre ensuite `http://localhost:5173`. Tu seras redirigé vers `/login` (stub)
car il n'y a pas de token : clique sur "Simuler une connexion" pour accéder
au dashboard.

## Structure

```
src/
  components/   Button, Input, Modal, Card (+ EventCard), Table, Sidebar
  routes/       ProtectedRoute.tsx
  pages/        Dashboard.tsx, LoginStub.tsx (temporaire)
  data/         mockData.ts (événements + participants fictifs)
  types/        index.ts (EventItem, Participant)
  lib/          auth.ts (gestion du token)
```

## Composants réutilisables (`/src/components`)

Tous les composants sont génériques et sans dépendance au contenu
"événement", sauf `EventCard` qui est spécifique au dashboard :

- `Button` — variantes `primary | secondary | ghost | danger`
- `Input` — avec `label`, `error`, `hint`
- `Modal` — `isOpen`, `onClose`, `title`, `footer`
- `Card` / `EventCard` — carte générique + carte événement (style "billet")
- `Table<T>` — table générique typée par colonnes (`Column<T>[]`)
- `Sidebar` — navigation du dashboard

**Pour les autres membres de l'équipe** : réutilisez `Button`, `Input`,
`Modal` pour la Landing Page et l'écran d'authentification, pour garder une
identité visuelle cohérente (couleurs `spotlight` / `ticket` / `backstage`
définies dans `tailwind.config.js`).

## Routes protégées

`ProtectedRoute.tsx` vérifie la présence d'un token (`isAuthenticated()`
dans `lib/auth.ts`) et redirige vers `/login` si absent.

⚠️ **À faire une fois le vrai Login prêt** :
1. Supprimer `src/pages/LoginStub.tsx`.
2. Dans le vrai formulaire de login, appeler `setToken(token)` (import
   depuis `src/lib/auth.ts`) après une connexion réussie côté API.
3. Dans `App.tsx`, remplacer `<Route path="/login" element={<LoginStub />} />`
   par la vraie page Login, et ajouter les routes `/inscription`,
   `/reset-password`, et `/` (landing) fournies par les autres membres.
4. Appeler `logout()` sur le bouton de déconnexion (déjà branché dans
   `Sidebar.tsx`).

## Identité visuelle (charte graphique dashboard)

- **Couleurs** : `backstage` (fond sidebar, #12131A), `spotlight` (primaire,
  #4F46E5), `ticket` (accent, #F5A623), `canvas` (fond de page, #F6F7FB)
- **Typographies** : `Space Grotesk` (titres), `Inter` (texte), `IBM Plex Mono`
  (dates, chiffres)
- **Élément signature** : les cartes événement reprennent le style d'un
  billet (souche colorée à gauche + encoches arrondies), en lien avec le
  thème "gestion d'événements"

## Gitflow

```bash
git checkout develop
git pull origin develop
git checkout -b feature/dashboard

git add .
git commit -m "feat(dashboard): cards événements, table participants, composants réutilisables, routes protégées"
git push origin feature/dashboard
```

Puis ouvrir une Pull Request `feature/dashboard` → `develop` pour revue par
l'équipe avant merge.

## À faire ensuite

- Brancher les cards/table sur une vraie API si le backend existe
  (remplacer `mockData.ts`)
- Ajouter une page "Calendrier" et "Paramètres" (liens déjà présents dans
  la Sidebar, à créer si demandé par le prof)
- Tester le responsive mobile (sidebar → menu burger si besoin)
