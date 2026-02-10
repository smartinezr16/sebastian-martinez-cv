import "./trayectoria.css";

export default function Trayectoria() {
  return (
    <section className="tray-section">
      <h2 className="tray-title">Trayectoria</h2>

      {/*2025–2026 → Preselección Bogotá */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            Preselección Bogotá <span>Proceso selectivo</span>
          </h3>

          <div className="tray-block">
            <strong>2025 – 2026</strong>
            <ul>
              <li>• Convocado a proceso de preselección Bogotá</li>
              <li>• Participación en microciclos y zonales de evaluación</li>
              <li>• Seguimiento técnico y competitivo por cuerpo técnico distrital</li>
              <li>• Campeón de campeones torneo Futuras estrellas del Olaya 2025/2026</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          {/* si no tienes logo oficial aún, puedes dejar este o cambiarlo luego */}
          <img src="/players/demo/lfb.png" alt="Preselección Bogotá" />
        </div>
      </div>

      {/* =========================
          FORTALEZA (ya lo tienes)
      ========================= */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            Fortaleza CEIF <span>Fuerzas Básicas</span>
          </h3>

          <div className="tray-block">
            <strong>2025</strong>
            <ul>
              <li>• Finalista y goleador con 8 anotaciones – Copa Metropolitana (II semestre)</li>
              <li>• Torneo Nacional Difutbol 2025 – Fase 5 (Top 15 del país)</li>
              <li>• Campeón y máximo goleador con 13 anotaciones – Copa Metropolitana (I semestre)</li>
              <li>• Ascenso a Fuerzas Básicas Fortaleza CEIF (Enero 2025)</li>
              <li>• Torneo Gaitana MVP – Fecha 3 y Fecha 5 (Febrero 2025)</li>
            </ul>
          </div>

          <div className="tray-block">
            <strong>2024</strong>
            <ul>
              <li>• 3° puesto Liga Bogotá 2011 – Segundo semestre (Noviembre 2024)</li>
              <li>• Campeón Bahía Soccer Cup Sub-12 (Octubre 2024)</li>
              <li>• Baby Fútbol Colanta – 4° puesto Zonal Bogotá (Julio 2024)</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          <img src="/players/demo/forta.png" alt="Fortaleza CEIF" />
        </div>
      </div>

      {/* =========================
          2023 → FCF Camps
      ========================= */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            FCF Camps <span>Selección Colombia</span>
          </h3>

          <div className="tray-block">
            <strong>2023</strong>
            <ul>
              <li>• Participación destacada en FCF Camps – Selección Colombia (Julio 2023)</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          <img src="/players/demo/fcf.png" alt="FCF Camps" />
        </div>
      </div>

      {/* =========================
          2019–2023 → Caterpillar Motor
      ========================= */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            Caterpillar Motor <span>Proceso formativo</span>
          </h3>

          <div className="tray-block">
            <strong>2019 – 2023</strong>
            <ul>
              <li>• Proceso formativo completo hasta etapa infantil</li>
              <li>• Máximo goleador Liga Bogotá 2023 (34 goles – ranking oficial 500 con registro público)</li>
              <li>• Campeón Liga de Bogotá Copa Oro (I semestre 2023)</li>
              <li>• 3° puesto Liga Bogotá 2012 (II semestre 2022)</li>
              <li>• 4° puesto Liga Bogotá 2012 (I semestre 2022)</li>
              <li>• Campeón Ciudad de Cali Sub-9 (Diciembre 2021)</li>
              <li>• Campeón Liga de Fútbol de Bogotá (I semestre 2021)</li>
              <li>• Medellín Soccer Cup (2019)</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          <img src="/players/demo/cat.png" alt="Caterpillar Motor" />
        </div>
      </div>

      {/* =========================
          2018–2019 → Barça Academy Colombia
      ========================= */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            Barça Academy Colombia <span>Formación internacional</span>
          </h3>

          <div className="tray-block">
            <strong>2018 – 2019</strong>
            <ul className="tray-bullets">
              <li>• Participación en torneos locales</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          <img src="/players/demo/barca.png" alt="Barça Academy Colombia" />
        </div>
      </div>

      {/* =========================
          2015–2017 → Caterpillar Motor
      ========================= */}
      <div className="tray-row">
        <div className="tray-left">
          <h3 className="tray-club">
            Caterpillar Motor <span>Iniciación deportiva</span>
          </h3>

          <div className="tray-block">
            <strong>2015 – 2017</strong>
            <ul className="tray-bullets">
              <li>• Categorías de iniciación y formación técnica base</li>
            </ul>
          </div>
        </div>

        <div className="tray-right">
          <img src="/players/demo/cat.png" alt="Caterpillar Motor" />
        </div>
      </div>
    </section>
  );
}
