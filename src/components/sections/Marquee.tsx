import { specialties } from "../../data/portfolio";

export function Marquee() {
  const groups = Array.from({ length: 4 }, (_, index) => index);

  return (
    <section className="marquee-band" aria-label="Core specializations">
      <div className="marquee-track">
        {groups.map((group) => (
          <div className="marquee-group" key={group} aria-hidden={group > 0}>
            {specialties.map((item) => (
              <span className="marquee-item" key={`${group}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
