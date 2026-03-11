'use client';

type SplinePlaceholderProps = {
  sceneUrl?: string;
};

export default function SplinePlaceholder({ sceneUrl }: SplinePlaceholderProps) {
  return (
    <section className="spline-card" aria-label="3D interactive hero placeholder">
      <p className="eyebrow">Future-ready 3D</p>
      <h3>Spline-ready experience layer</h3>
      <p>
        This block is intentionally isolated so your team can swap in a Spline scene without restructuring
        the page. Replace the placeholder with <code>@splinetool/react-spline</code> when your scene is ready.
      </p>
      {sceneUrl ? (
        <p className="scene-url">Connected scene: {sceneUrl}</p>
      ) : (
        <p className="scene-url">No scene URL set yet.</p>
      )}
    </section>
  );
}
