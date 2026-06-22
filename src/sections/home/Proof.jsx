import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";
import styles from "./home.module.scss";

export default function Proof() {
  return (
    <section className={styles.proof}>
      <div className="container-x">
        <Reveal as="p" className={styles.proofLab}>
          Trusted to deliver
        </Reveal>
        <div className={styles.proofGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statN}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className={styles.statL}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
