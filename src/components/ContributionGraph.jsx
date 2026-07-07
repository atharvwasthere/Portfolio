import data from "@/data/contributions.json";

// Opacity ramp for active levels 1..4. Level 0 (no activity) is a neutral cell.
// Hue comes from `currentColor`: light → emerald, dark → cyan (site accents).
const ACTIVE_OPACITY = { 1: 0.32, 2: 0.55, 3: 0.78, 4: 1 };

const DAY_MS = 86400000;
const utcDay = (iso) => new Date(`${iso}T00:00:00Z`);

// GitHub-style layout: columns = weeks (Sun-anchored), rows = weekday.
const first = utcDay(data.days[0].date);
const firstSunday = new Date(first.getTime() - first.getUTCDay() * DAY_MS);
const weekOf = (iso) =>
  Math.floor((utcDay(iso).getTime() - firstSunday.getTime()) / (7 * DAY_MS));
const weeks = weekOf(data.days[data.days.length - 1].date) + 1;

const ContributionGraph = () => {
  return (
    <div className="text-emerald-500 dark:text-cyan-400">
      <p className="mb-3 text-sm text-muted-foreground md:text-base">
        Still shipping {" "}
        <span className="text-foreground">the work doesn&apos;t reduce to a number</span>,{" "}
        but here&apos;s the proof of it.
      </p>

      <div
        className="grid w-full gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(7, minmax(0, 1fr))",
        }}
        role="img"
        aria-label={`GitHub contributions from ${data.from} to ${data.to}`}
      >
        {data.days.map((d) => (
          <div
            key={d.date}
            title={`${d.count} on ${d.date}`}
            className={`aspect-square w-full rounded-[2.5px] ${d.level === 0 ? "bg-foreground/[0.07]" : ""}`}
            style={{
              gridColumn: weekOf(d.date) + 1,
              gridRow: utcDay(d.date).getUTCDay() + 1,
              backgroundColor: d.level === 0 ? undefined : "currentColor",
              opacity: d.level === 0 ? undefined : ACTIVE_OPACITY[d.level],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;
