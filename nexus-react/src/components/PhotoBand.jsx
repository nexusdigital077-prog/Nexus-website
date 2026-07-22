export default function PhotoBand({ backgroundImage, stamp, eyebrow, heading, description, style = {} }) {
  return (
    <section
      className="photo-band"
      style={{ backgroundImage: `url('${backgroundImage}')`, ...style }}
    >
      <span className="photo-band__stamp">{stamp}</span>
      <div className="photo-band__content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
