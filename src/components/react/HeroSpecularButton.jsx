import { useEffect, useState } from 'react';

import SpecularButton from './SpecularButton';

export default function HeroSpecularButton() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      if (motion.matches || !('ResizeObserver' in window) || !('IntersectionObserver' in window)) {
        setEnhanced(false);
        return;
      }

      try {
        const context = document.createElement('canvas').getContext('webgl2');
        setEnhanced(Boolean(context));
        context?.getExtension('WEBGL_lose_context')?.loseContext();
      } catch {
        setEnhanced(false);
      }
    };

    update();
    motion.addEventListener('change', update);
    return () => motion.removeEventListener('change', update);
  }, []);

  const label = <>查看精选作品 <span aria-hidden="true">↗</span></>;

  if (!enhanced) {
    return <a className="button button-primary hero-specular-fallback" href="#work">{label}</a>;
  }

  const openWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.location.hash !== '#work') window.history.pushState(null, '', '#work');
  };

  return (
    <SpecularButton
      size="lg"
      radius={18}
      tint="#ffffff"
      tintOpacity={0.04}
      textColor="#f5f5f5"
      lineColor="#ffffff"
      baseColor="#525252"
      intensity={1}
      idleIntensity={0.35}
      shineSize={10}
      shineFade={34}
      thickness={1.2}
      glow={1}
      followMouse
      proximity={250}
      className="hero-specular"
      onClick={openWork}
    >
      {label}
    </SpecularButton>
  );
}
