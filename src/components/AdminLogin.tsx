import React, { useState } from 'react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToPublicSite: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToPublicSite }) => {
  const [email, setEmail] = useState('silva@studiosilva.com.br');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginState, setLoginState] = useState<'idle' | 'authenticating' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginState('authenticating');

    setTimeout(() => {
      setLoginState('success');
      setTimeout(() => {
        onLoginSuccess();
      }, 900);
    }, 1100);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background organic glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-100px] w-[550px] h-[550px] rounded-full bg-primary-fixed/20 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-secondary-container/30 blur-3xl"
      ></div>

      <div className="relative w-full max-w-md mx-auto z-10 flex flex-col gap-8">
        {/* Header branding */}
        <div className="flex flex-col items-center text-center gap-3">
          <button
            onClick={onBackToPublicSite}
            className="cursor-pointer hover:opacity-90 transition-opacity"
            title="Voltar ao início"
          >
            <img
              alt="Logo Studio Silva Fotografias"
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida/ALJJyrAgXM-YZycf2bjnPTbpPYRmdNToDjaTLV4PWAuurgmWRrn0xpvC2VDcbOQKtbJxz0isJo7-14YtzpvpvXzEmpSQQr1SayRT2WTpDWnguzoRK0dGi4225MDdkgQ3ZgqNJj93WsvXhsCByTYI-8tGUg5Q2j_Wm5zrKQD5tDkEfFpbZjwb3yO2uDAS8tyEj81FFGZH_5uP4Zez0liPzCsh7S4HnvTAAd4D0fgiQABn5mIBPw"
            />
          </button>
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-serif">
              Studio Silva
            </h1>
            <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">
              Curadoria &amp; Acervo Fotográfico
            </p>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
            Acesse para gerenciar publicações, catalogação de ensaios e arquivos digitais.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-surface-container-low p-8 sm:p-10 rounded-2xl shadow-xl border border-outline-variant/30 flex flex-col gap-6 relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* E-mail input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant font-medium" htmlFor="admin-email">
                E-mail Corporativo
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">
                  mail
                </span>
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="silva@studiosilva.com.br"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all"
                />
              </div>
            </div>

            {/* Senha input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant font-medium" htmlFor="admin-password">
                Senha de Acesso
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">
                  key
                </span>
                <input
                  id="admin-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3 bg-surface-container-lowest text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all"
                />
                <button
                  type="button"
                  aria-label="Alternar visibilidade da senha"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-outline hover:text-on-surface transition-colors flex items-center justify-center p-0.5 rounded focus:outline-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember & Forgot options */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  id="remember-device"
                  type="checkbox"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                  className="w-4 h-4 rounded text-primary accent-primary bg-surface-container-lowest cursor-pointer"
                />
                <span className="font-body-sm text-body-sm text-on-surface-variant">Lembrar deste dispositivo</span>
              </label>
              <button
                type="button"
                onClick={() => alert('Instruções de redefinição seguras foram enviadas ao e-mail institucional silva@studiosilva.com.br.')}
                className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors underline underline-offset-4 decoration-primary/40 hover:decoration-primary cursor-pointer"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-2 py-3 px-6 text-on-primary font-label-lg text-label-lg rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                loginState === 'success'
                  ? 'bg-secondary'
                  : 'bg-primary hover:bg-on-primary-fixed-variant hover:shadow-lg'
              }`}
            >
              {loginState === 'authenticating' && (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Autenticando...</span>
                </>
              )}
              {loginState === 'success' && (
                <>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Acesso Autorizado</span>
                </>
              )}
              {loginState === 'idle' && (
                <>
                  <span>Entrar no Painel</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Security badge and Return to public site */}
          <div className="pt-2 flex flex-col items-center text-center gap-3 relative z-10 border-t border-outline-variant/30">
            <div className="flex items-center gap-1.5 text-outline text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
              <span>Ambiente restrito e protegido por criptografia de ponta a ponta</span>
            </div>
            <button
              onClick={onBackToPublicSite}
              className="inline-flex items-center gap-1 text-secondary hover:text-on-surface font-body-sm text-body-sm transition-colors mt-1 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-0.5">
                arrow_back
              </span>
              <span>Voltar para o site público</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
