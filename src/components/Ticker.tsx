interface TickerProps { items: string[]; reverse?: boolean; }

export function Ticker({ items, reverse = false }: TickerProps) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-separator py-3" aria-hidden="true">
      <div className={`flex w-max whitespace-nowrap ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="text-mono mx-6 text-[0.7rem] uppercase text-muted-foreground">
            {item}
            <span className="ml-6 text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
