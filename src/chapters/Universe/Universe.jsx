import { useEffect, useRef, useState } from "react";
import UniverseScene from "./UniverseScene";

const moments = [
  {
    title: "The Beginning",
    text: "Somewhere along the way, you became one of the most beautiful parts of my life.",
    image: "/images/moment-1.jpg",
  },
  {
    title: "Your Smile",
    text: "There are little moments with you that I could replay forever.",
    image: "/images/moment-2.jpg",
  },
  {
    title: "Our Memories",
    text: "The laughs, conversations, silly moments and everything in between.",
    image: "/images/moment-3.jpg",
  },
  {
    title: "Us",
    text: "Out of all the places I could be, I love the moments where I'm with you.",
    image: "/images/moment-4.jpg",
  },
];

export default function Universe() {
  const containerRef = useRef(null);

  const [progress, setProgress] = useState(0);

  /* ==========================================
     NORMAL BROWSER SCROLL
  ========================================== */

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const element = containerRef.current;

      if (!element) {
        frameId = requestAnimationFrame(updateProgress);
        return;
      }

      const scrollableHeight =
        element.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        frameId = requestAnimationFrame(updateProgress);
        return;
      }

      const scrollTop = Math.max(
        0,
        -element.getBoundingClientRect().top
      );

      const value =
        scrollTop / scrollableHeight;

      setProgress(
        Math.min(
          Math.max(value, 0),
          1
        )
      );

      frameId =
        requestAnimationFrame(updateProgress);
    };

    frameId =
      requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="
        relative
        w-full
        max-w-[100vw]
        overflow-x-hidden
      "
    >

      {/* ======================================
          FIXED UNIVERSE
      ====================================== */}

      <div
        className="
          fixed
          inset-0
          z-0
          w-screen
          h-screen
          overflow-hidden
          pointer-events-none
        "
      >
        <UniverseScene progress={progress} />
      </div>


      {/* ======================================
          CONTENT
      ====================================== */}

      <div className="relative z-10 w-full">


        {/* ====================================
            INTRO
        ==================================== */}

        <section
          className="
            h-screen
            w-full
            flex
            items-center
            justify-center
            px-5
          "
        >

          <div className="text-center">

            <p
              className="
                handwriting
                text-4xl
                sm:text-5xl
                md:text-6xl
                text-white
              "
            >
              Once upon a time...
            </p>

            <p
              className="
                mt-5
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.35em]
                text-white/50
              "
            >
              Keep scrolling
            </p>

          </div>

        </section>


        {/* ====================================
            MOON JOURNEY
        ==================================== */}

        <section
          className="
            h-[350vh]
            w-full
          "
        />


        {/* ====================================
            DAWN
        ==================================== */}

        <section
          className="
            h-screen
            w-full
            flex
            items-center
            justify-center
            px-5
          "
        >

          <div className="text-center">

            <p
              className="
                handwriting
                text-5xl
                sm:text-6xl
                md:text-7xl
                text-white
              "
            >
              And then...
            </p>

            <p
              className="
                mt-4
                text-lg
                sm:text-xl
                text-white/70
              "
            >
              there was us.
            </p>

          </div>

        </section>


        {/* ====================================
            OUR MOMENTS INTRO
        ==================================== */}

        <section
          className="
            h-screen
            w-full
            flex
            items-center
            justify-center
            px-5
          "
        >

          <div className="text-center">

            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.4em]
                text-white/50
              "
            >
              Our little universe
            </p>

            <h2
              className="
                heading
                mt-4
                text-5xl
                sm:text-6xl
                md:text-8xl
                text-white
              "
            >
              Our Moments
            </h2>

            <p
              className="
                mt-6
                text-sm
                text-white/40
              "
            >
              Keep scrolling
            </p>

          </div>

        </section>


        {/* ====================================
            MEMORY SECTIONS
        ==================================== */}

        {moments.map((moment, index) => (
          <section
            key={moment.title}
            className="
              min-h-screen
              w-full
              flex
              items-center
              justify-center
              px-5
              sm:px-8
              py-20
            "
          >

            <div
              className="
                w-full
                max-w-5xl
                mx-auto
                flex
                flex-col
                md:flex-row
                items-center
                justify-center
                gap-10
                md:gap-16
              "
            >

              {/* ==============================
                  IMAGE
              ============================== */}

              <div
                className="
                  w-full
                  max-w-[420px]
                  md:w-[46%]
                  flex-shrink-0
                "
              >

                <div
                  className="
                    relative
                    w-full
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/15
                    bg-white/[0.06]
                    backdrop-blur-xl
                  "
                >

                  {/* Placeholder */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      text-center
                      px-6
                    "
                  >

                    <div>

                      <div
                        className="
                          text-4xl
                          mb-4
                        "
                      >
                        ❤️
                      </div>

                      <p
                        className="
                          text-sm
                          text-white/40
                        "
                      >
                        Your memory
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-white/25
                        "
                      >
                        Add your photo here
                      </p>

                    </div>

                  </div>


                  {/* Actual image */}

                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      z-10
                    "
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />

                </div>

              </div>


              {/* ==============================
                  TEXT
              ============================== */}

              <div
                className="
                  w-full
                  md:w-[46%]
                  text-center
                  md:text-left
                "
              >

                <p
                  className="
                    handwriting
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    text-pink-200
                  "
                >
                  {moment.title}
                </p>

                <p
                  className="
                    mt-5
                    text-base
                    sm:text-lg
                    md:text-xl
                    leading-relaxed
                    text-white/75
                    max-w-lg
                    mx-auto
                    md:mx-0
                  "
                >
                  {moment.text}
                </p>

              </div>

            </div>

          </section>
        ))}


        {/* ====================================
            SUNSET SPACE
        ==================================== */}

        <section
          className="
            h-[150vh]
            w-full
          "
        />


        {/* ====================================
            FINAL GIFT
        ==================================== */}

        <section
          className="
            min-h-screen
            w-full
            flex
            items-center
            justify-center
            px-5
            sm:px-8
            py-20
          "
        >

          <div
            className="
              w-full
              max-w-4xl
              mx-auto
            "
          >

            <div
              className="
                w-full
                rounded-[2rem]
                sm:rounded-[2.5rem]
                border
                border-pink-300/30
                bg-black/30
                backdrop-blur-2xl
                p-8
                sm:p-12
                md:p-16
                text-center
                shadow-[0_0_80px_rgba(236,72,153,0.2)]
              "
            >

              <p
                className="
                  handwriting
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-pink-200
                "
              >
                For my Honey ❤️
              </p>

              <h2
                className="
                  heading
                  mt-5
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  leading-tight
                  text-white
                "
              >
                You mean the world to me.
              </h2>

              <p
                className="
                  mt-6
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-white/65
                "
              >
                Happy Girlfriend's Day.
                <br />
                Thank you for being part
                of my universe.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}