import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { devLogin } from "../lib/auth";

/**
 * ⚠️ STUB TEMPORAIRE — à remplacer par la vraie page Login (maquette Figma
 * auth) faite par le coéquipier en charge de l'authentification.
 * Sert uniquement à vérifier que ProtectedRoute redirige bien ici quand
 * il n'y a pas de token, et qu'on peut revenir sur le dashboard après.
 */
export default function LoginStub() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname || "/dashboard";

  function handleFakeLogin() {
    devLogin();
    navigate(from, { replace: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <div className="w-full max-w-sm rounded-card bg-white p-8 text-center shadow-card">
        <h1 className="mb-2 font-display text-xl font-semibold text-ink">Page Login (stub)</h1>
        <p className="mb-6 text-sm text-ink-muted">
          Cette page sera remplacée par le vrai écran d'authentification. Pour l'instant, ce
          bouton simule une connexion réussie.
        </p>
        <Button className="w-full" onClick={handleFakeLogin}>
          Simuler une connexion
        </Button>
      </div>
    </div>
  );
}
