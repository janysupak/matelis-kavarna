export default function Home() {
  const kavarna = [
    "/kavarna1.jpg",
    "/kavarna2.jpg",
    "/kavarna3.jpg",
  ];

  const jidlo = [
    "/jidlo1.jpg",
    "/jidlo2.jpg",
    "/jidlo3.jpg",
  ];

  const oteviraciDoba = [
    ["Pondělí", "8:00 – 13:00"],
    ["Úterý", "8:00 – 18:00"],
    ["Středa", "8:00 – 18:00"],
    ["Čtvrtek", "8:00 – 18:00"],
    ["Pátek", "8:00 – 18:00"],
    ["Sobota", "10:00 – 18:00"],
    ["Neděle", "Zavřeno"],
  ];

  return (
    <main
      style={{
        backgroundColor: "#936f46",
        color: "#2b1d16",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          background: "rgba(30,20,15,0.75)",
          backdropFilter: "blur(10px)",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "16px",
              background: "white",
              padding: "6px",
            }}
          />

          <h2
            style={{
              color: "white",
              fontSize: "30px",
            }}
          >
            MatEliS
          </h2>
        </div>

        <div
          style={{
            color: "#e4c29b",
            fontSize: "15px",
            letterSpacing: "2px",
          }}
        >
          KAVÁRNA • KRNOV
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <img
          src="/kebab.jpg"
          alt="hero"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
            }}
          >
            <p
              style={{
                letterSpacing: "5px",
                color: "#d8ae7d",
                marginBottom: "20px",
              }}
            >
              MATELIS KAVÁRNA
            </p>

            <h1
              style={{
                fontSize: "100px",
                lineHeight: "0.95",
                marginBottom: "35px",
              }}
            >
              Místo,
              <br />
              kde voní
              <br />
              káva ☕
            </h1>

            <p
              style={{
                fontSize: "25px",
                lineHeight: "1.8",
                color: "#eee",
              }}
            >
              Výběrová káva, útulná atmosféra,
              sladké dobroty a pohodové posezení
              v srdci Krnova.
            </p>
          </div>
        </div>
      </section>

      {/* O KAVÁRNĚ */}
      <section
        style={{
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#b37a46",
                letterSpacing: "4px",
                marginBottom: "20px",
              }}
            >
              O NÁS
            </p>

            <h2
              style={{
                fontSize: "68px",
                lineHeight: "1.05",
                marginBottom: "35px",
              }}
            >
              MatEliS
              <br />
              Kavárna
            </h2>

            <p
              style={{
                fontSize: "21px",
                lineHeight: "2",
                color: "#5a4638",
              }}
            >
              Na Albrechtické ulici v Krnově jsme
              vytvořili místo, kde si můžete na chvíli
              odpočinout od ruchu města a vychutnat si
              opravdu poctivou kávu.
            </p>

            <p
              
   style={{ fontSize: "21px", lineHeight: "2", color: "#5a4638" }}>
    V prostorách kavárny MatEliS pro vás rádi připravíme:
  </p>

  <ul
    style={{
      fontSize: "21px",
      lineHeight: "2",
      color: "#5a4638",
      paddingLeft: "20px",
      marginTop: "10px",
    }}
  >
    <li>narozeninové oslavy</li>
    <li>smuteční hostiny</li>
    <li>firemní večírky</li>
    <li>rodinná setkání</li>
    <li>posezení s přáteli</li>
    <li>menší soukromé akce</li>
  </ul>

  <p style={{ fontSize: "21px", lineHeight: "2", color: "#5a4638", marginTop: "20px" }}>
    Zajistíme příjemné prostředí, domácí občerstvení, sladké i slané dobroty,
    výběrovou kávu i individuální domluvu podle vašich přání.
  </p>

  <p style={{ fontSize: "21px", lineHeight: "2", color: "#5a4638", marginTop: "20px" }}>
    Pro více informací a rezervace nás neváhejte kontaktovat.
  

            </p>
          </div>

          <img
            src="/kavarna2.jpg"
            alt="kavárna"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              borderRadius: "40px",
            }}
          />
        </div>
      </section>

      {/* NABÍDKA */}
      <section
        style={{
          background: "#2d2018",
          color: "white",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              marginBottom: "50px",
            }}
          >
            Co u nás najdete
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              "☕ Výběrová káva",
              "🥐 Croissanty & housky",
              "🍰 Dorty a řezy",
              "🍨 Zmrzlina",
              "🍓 Horké ovoce",
              "🍽️ Denní menu",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#3c2c22",
                  padding: "40px",
                  borderRadius: "30px",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTKY JÍDLA */}
      <section
        style={{
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              marginBottom: "50px",
            }}
          >
            Něco dobrého ☕
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {jidlo.map((img) => (
              <img
                key={img}
                src={img}
                alt="jídlo"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOTKY KAVÁRNY */}
      <section
        style={{
          padding: "0 40px 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              marginBottom: "50px",
            }}
          >
            Atmosféra kavárny
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {kavarna.map((img) => (
              <img
                key={img}
                src={img}
                alt="kavárna"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OTEVÍRACÍ DOBA */}
      <section
        style={{
          background: "#2d2018",
          color: "white",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#3c2c22",
            borderRadius: "35px",
            padding: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "55px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Otevírací doba
          </h2>

          {oteviraciDoba.map(([day, time]) => (
            <div
              key={day}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "18px 0",
                borderBottom:
                  "1px solid rgba(255,255,255,0.08)",
                fontSize: "22px",
              }}
            >
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1d140f",
          color: "#aaa",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{
            width: "70px",
            borderRadius: "20px",
            background: "white",
            padding: "8px",
            marginBottom: "20px",
          }}
        />

        <h3
          style={{
            color: "white",
            fontSize: "36px",
          }}
        >
          MatEliS Kavárna
        </h3>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          📍 Albrechtická 48, Krnov
        </p>

        <p
          style={{
            marginTop: "15px",
          }}
        >
          © 2026 MatEliS Kavárna
        </p>
      </footer>
    </main>
  );
} 