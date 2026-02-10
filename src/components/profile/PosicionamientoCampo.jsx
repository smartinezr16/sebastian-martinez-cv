import "./posicionamientoCampo.css";

export default function PosicionamientoCampo() {
  const actionImage = "/players/demo/elnene.PNG";

  const posiciones = [
    { code: "DC", x: 25, y: 50 },
    { code: "EI", x: 35, y: 80 },
    { code: "ED", x: 35, y: 20 },
    { code: "LD", x: 72, y: 20 },
  ];

  // ✅ NOMBRES LINDOS PARA LA LISTA
  const positionNames = {
    DC: "Delantero centro",
    EI: "Extremo izquierdo",
    ED: "Extremo Derecho",
    LD: "Lateral Derecho",
  };

  const posicionesUnicas = Array.from(new Set(posiciones.map((p) => p.code)));

  return (
    <section className="pp-section">
      <h2 className="pp-section-title">Posicionamiento en el campo</h2>

      <div className="pc-layout">
        <div className="pc-photoWrap">
          <img
            src={actionImage}
            alt="Acción del jugador"
            className="pc-photo"
            draggable="false"
          />
        </div>

        <div className="pc-rightCol">
          <div className="pc-pitch">
            <div className="pc-pitch-inner" aria-hidden="true">
              <div className="pc-line pc-border" />
              <div className="pc-line pc-mid" />
              <div className="pc-circle" />
              <div className="pc-center-dot" />

              <div className="pc-box pc-box-top" />
              <div className="pc-box pc-box-bottom" />

              <div className="pc-goal pc-goal-top" />
              <div className="pc-goal pc-goal-bottom" />

              <div className="pc-pen pc-pen-top" />
              <div className="pc-pen pc-pen-bottom" />

              <div className="pc-arc pc-arc-top" />
              <div className="pc-arc pc-arc-bottom" />

              {posiciones.map((p) => (
                <div
                  key={`${p.code}-${p.x}-${p.y}`}
                  className="pc-chip"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  title={p.code}
                >
                  {p.code}
                </div>
              ))}
            </div>
          </div>

          {/* ✅ LISTA COMO LA QUIERES: "• Nombre (CODE)" */}
          <div className="pc-positionsList">
            <p className="pc-positionsTitle">Posiciones en las que juega:</p>

            <div className="pc-bullets">
              {posicionesUnicas.map((code) => (
                <div key={code} className="pc-bulletRow">
                  <span className="pc-bulletDot">•</span>
                  <span className="pc-bulletText">
                    {positionNames[code] || code} ({code})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
        MAPA DE CALOR + JUGADOR
      ========================= */}
      <div className="pc-heat-player">
        <div className="pc-heat">
          <img
            src="/players/demo/calor.png"
            alt="Mapa de calor"
            className="pc-heat-img"
            draggable="false"
          />
        </div>

        <div className="pc-player">
          <img
            src="/players/demo/vasho.PNG"
            alt="Jugador"
            className="pc-player-img"
            draggable="false"
          />
        </div>
      </div>

    </section>
  );
}
