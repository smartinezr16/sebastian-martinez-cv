import { useRef } from "react";
import "./playerProfile.css";

// ⬇️ nuevos apartados
import PosicionamientoCampo from "../components/profile/PosicionamientoCampo";
import Trayectoria from "../components/profile/Trayectoria";

export default function PlayerProfile() {
  const rootRef = useRef(null);

  const onMove = (e) => {
    const el = rootRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const nx = (x / r.width) * 2 - 1;
    const ny = (y / r.height) * 2 - 1;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--nx", nx.toFixed(3));
    el.style.setProperty("--ny", ny.toFixed(3));
  };

  const playerImage = "/players/demo/profile.png";

  const player = {
    nombre: "Sebastian",
    apellido: "Martinez",
    role: "Delantero",
    pais: "Bogotá, Colombia",
    edad: 14,
    nacimiento: "6 Enero, 2012",
    altura: "1.69 m",
    peso: "63 kg",
    categoria: "2011 Fuerzas Básicas",
    club: "Fortaleza FC",
    piernaHabil: "Derecha", // ✅ se mantiene
    descripcion:
      "Delantero polifuncional con gran capacidad goleadora y mentalidad competitiva. Destaca por su velocidad, agresividad ofensiva y buena lectura del juego. Jugador con carácter, disciplina y alto compromiso, capaz de marcar diferencia en el último tercio del campo.",
  };

  return (
    <div ref={rootRef} className="pp-root" onMouseMove={onMove}>
      {/* Fondo reactivo */}
      <div className="pp-bgfx" aria-hidden="true" />

      <main className="pp-main">
        {/* LEFT */}
        <section className="pp-left">
          <h1 className="pp-name pp-reveal d1">
            <span>{player.nombre}</span>
            <span>{player.apellido}</span>
          </h1>

          <div className="pp-subline pp-reveal d2">
            <span className="pp-subline-strong">{player.role}</span>
            <span className="pp-subline-dim"> / {player.pais}</span>
          </div>

          <div className="pp-info-grid pp-reveal d3">
            <div className="pp-info-col">
              <div className="pp-info-row">
                <span className="pp-label">Edad:</span>
                <span className="pp-value">{player.edad}</span>
              </div>
              <div className="pp-info-row">
                <span className="pp-label">Nacimiento:</span>
                <span className="pp-value">{player.nacimiento}</span>
              </div>
              <div className="pp-info-row">
                <span className="pp-label">Club:</span>
                <span className="pp-value">{player.club}</span>
              </div>
            </div>

            <div className="pp-info-col">
              <div className="pp-info-row">
                <span className="pp-label">Altura:</span>
                <span className="pp-value">{player.altura}</span>
              </div>
              <div className="pp-info-row">
                <span className="pp-label">Peso:</span>
                <span className="pp-value">{player.peso}</span>
              </div>
              <div className="pp-info-row">
                <span className="pp-label">Categoría:</span>
                <span className="pp-value">{player.categoria}</span>
              </div>
            </div>
          </div>

          <div className="pp-divider pp-reveal d3" />

          <p className="pp-description pp-reveal d4">{player.descripcion}</p>

          {/* ✅ NUEVO: Pierna hábil después de la descripción (sin tocar CSS) */}
          <div className="pp-info-row pp-foot-row pp-reveal d4">
            <span className="pp-label">Pierna hábil:</span>
            <span className="pp-value">{player.piernaHabil}</span>
          </div>

        </section>

        {/* RIGHT */}
        <section className="pp-right">
          <div className="pp-player-hero pp-reveal d2">
            <div className="pp-yellow-circle" />

            <img
              className="pp-player-img pp-player-img--fx"
              src={playerImage}
              alt="Player"
              draggable="false"
            />
          </div>

          <div className="pp-social pp-reveal d3">
            <span>Tik Tok</span>
            <span>Instagram</span>
          </div>
        </section>

        {/* ⬇️ NUEVAS SECCIONES DEL PERFIL */}
        <section className="pp-sections">
          <PosicionamientoCampo />
          <Trayectoria />
        </section>
      </main>
    </div>
  );
}
