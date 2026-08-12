import logoUrl from '../../assets/ummah-square-logo.svg';

interface LogoProps {
  /** 'ink' on light backgrounds, 'light' on the navy footer. */
  tone?: 'ink' | 'light';
  /** Height of the mark in px — matches the live site's 32px in the header. */
  size?: number;
  /** Mark alone, no wordmark. */
  markOnly?: boolean;
  /** Hide the wordmark below `sm`, as the live site does. */
  hideWordmarkOnMobile?: boolean;
  className?: string;
}

/**
 * The Ummah Square logo — the real mark from ummahsquare.shop/logo.svg,
 * paired with the wordmark the way the live header does it.
 *
 * Every logo in the app renders through this component, so replacing the SVG in
 * src/assets updates the navbar, footer and anywhere else it appears.
 */
export default function Logo({
  tone = 'ink',
  size = 32,
  markOnly = false,
  hideWordmarkOnMobile = false,
  className = '',
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoUrl}
        alt="Ummah Square"
        style={{ height: size, width: 'auto' }}
        className="shrink-0"
      />
      {!markOnly && (
        <span
          className={hideWordmarkOnMobile ? 'hidden sm:block' : undefined}
          style={{
            color: tone === 'light' ? '#FFFFFF' : 'var(--ink)',
            fontWeight: 700,
            fontSize: size * 0.56,
            letterSpacing: '-0.01em',
          }}
        >
          Ummah Square
        </span>
      )}
    </span>
  );
}
