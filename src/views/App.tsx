import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./App.module.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.5982 57.7027C44.3925 57.7027 57.1963 44.7855 57.1963 28.8514C57.1963 12.9172 44.3925 0 28.5982 0C12.8038 0 0 12.9172 0 28.8514C0 44.7855 12.8038 57.7027 28.5982 57.7027Z"
              fill="#FF0101"
            />
            <path
              d="M40.9174 16.423C43.5556 16.423 45.6942 14.2654 45.6942 11.6039C45.6942 8.94239 43.5556 6.78479 40.9174 6.78479C38.2792 6.78479 36.1406 8.94239 36.1406 11.6039C36.1406 14.2654 38.2792 16.423 40.9174 16.423Z"
              fill="#020203"
            />
            <mask id="mask0_44_12" maskUnits="userSpaceOnUse" x="0" y="0" width="58" height="58">
              <path
                d="M28.5982 57.7027C44.3925 57.7027 57.1963 44.7855 57.1963 28.8514C57.1963 12.9172 44.3925 0 28.5982 0C12.8038 0 0 12.9172 0 28.8514C0 44.7855 12.8038 57.7027 28.5982 57.7027Z"
                fill="#FFFFFF"
              />
            </mask>
            <g mask="url(#mask0_44_12)">
              <path
                d="M39.5346 29.422C39.8489 29.9293 40.4146 30.2463 41.0431 30.2463C41.3574 30.2463 41.6716 30.1829 41.9859 29.9927L50.5968 24.7931C51.4767 24.2858 51.7281 23.1445 51.2253 22.3201C50.7225 21.4324 49.5911 21.1788 48.774 21.686L41.6088 25.9979L38.1519 19.2131C37.2091 18.2619 36.1406 17.3108 35.0721 16.4865L24.827 11.2869C24.1356 10.9698 23.3814 11.0332 22.8157 11.5405L14.2677 19.3399C13.5134 20.0374 13.4506 21.1788 14.142 21.8763C14.8334 22.6372 15.9647 22.7006 16.6561 22.0031L24.387 15.028L29.7295 17.7546L20.553 32.0852L-0.377096 57.0686C-1.19419 58.0197 -1.13133 59.5415 -0.125684 60.3659C0.817112 61.1902 2.32559 61.1268 3.14268 60.1122L23.4442 36.4605L32.1808 38.4896L26.2098 47.9376C25.5812 49.079 25.9584 50.474 27.0897 51.1081C28.0954 51.6788 29.4153 51.4251 30.1067 50.4106L37.7747 38.1725C38.2147 37.5384 38.2776 36.7141 38.0261 36.0166C37.7119 35.3191 37.1462 34.8118 36.392 34.685L29.6667 33.0998L35.7634 23.4615L39.5346 29.422Z"
                fill="#020203"
              />
            </g>
          </svg>
          <h1>SportSee</h1>
        </div>
        <NavLink to="#">Accueil</NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} end>
          Profil
        </NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </header>
      <section className={styles.lateral}>
        <div className={styles.lateral_pictos}>
          <div className={styles.picto_wrapper}>
            <svg viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C20.2091 8 22 6.20914 22 4C22 1.79086 20.2091 0 18 0C15.7909 0 14 1.79086 14 4C14 6.20914 15.7909 8 18 8Z" />
              <path d="M36 24V20C31.52 20 27.68 18.08 24.8 14.64L22.12 11.44C21.36 10.52 20.24 10 19.06 10H16.96C15.78 10 14.66 10.52 13.9 11.44L11.22 14.64C8.32 18.08 4.48 20 0 20V24C5.54 24 10.38 21.66 14 17.5V22L6.24 25.1C4.9 25.64 4 26.96 4 28.42C4 30.4 5.6 32 7.58 32H12V31C12 28.24 14.24 26 17 26H23C23.56 26 24 26.44 24 27C24 27.56 23.56 28 23 28H17C15.34 28 14 29.34 14 31V32H28.42C30.4 32 32 30.4 32 28.42C32 26.96 31.1 25.64 29.76 25.1L22 22V17.5C25.62 21.66 30.46 24 36 24Z" />
            </svg>
          </div>
          <div className={styles.picto_wrapper}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3334 10.6666L9.00002 15C9.41335 15.16 9.74669 15.36 10.0267 15.52C10.52 15.8266 10.8134 16 11.56 16C12.3067 16 12.6 15.8266 13.0934 15.52C13.7067 15.16 14.5334 14.6666 16.0134 14.6666C17.4934 14.6666 18.32 15.16 18.92 15.52C19.4134 15.8133 19.72 16 20.4534 16C21.1867 16 21.4934 15.8266 21.9867 15.52C22.1467 15.4266 22.3334 15.32 22.5334 15.2133L13.9734 6.66663C11.9067 4.59997 10 3.98663 6.66669 3.99997V7.3333C9.09335 7.31997 10.52 7.8533 12 9.3333L13.3334 10.6666ZM29.3334 22H29.3067H29.3334ZM7.13335 20.6666C7.86669 20.6666 8.17335 20.8533 8.66669 21.1466C9.26669 21.5066 10.0934 22 11.5734 22C13.0534 22 13.88 21.5066 14.48 21.1466C14.9734 20.84 15.2667 20.6666 16.0134 20.6666C16.7467 20.6666 17.0534 20.8533 17.5467 21.1466C18.1467 21.5066 18.9734 22 20.4534 22C21.9334 22 22.76 21.5066 23.36 21.1466C23.8534 20.84 24.1467 20.6666 24.8934 20.6666C25.6267 20.6666 25.9334 20.8533 26.4267 21.1466C27.0267 21.5066 27.84 21.9866 29.3067 22V19.3333C28.5734 19.3333 28.2667 19.1466 27.7734 18.8533C27.1734 18.4933 26.3467 18 24.8667 18C23.3867 18 22.56 18.4933 21.96 18.8533C21.4667 19.16 21.16 19.3333 20.4267 19.3333C19.6934 19.3333 19.3867 19.1466 18.8934 18.8533C18.2934 18.4933 17.4667 18 15.9867 18C14.5067 18 13.68 18.4933 13.08 18.8533C12.5867 19.16 12.2934 19.3333 11.5467 19.3333C10.8134 19.3333 10.5067 19.1466 10.0134 18.8533C9.41335 18.4933 8.58669 18 7.10669 18C5.62669 18 4.80002 18.4933 4.20002 18.8533C3.70669 19.16 3.41335 19.3333 2.66669 19.3333V22C4.14669 22 4.97335 21.5066 5.60002 21.1466C6.09335 20.84 6.40002 20.6666 7.13335 20.6666ZM24.8934 24C23.4134 24 22.5867 24.4933 21.9867 24.8533C21.4934 25.16 21.1867 25.3333 20.4534 25.3333C19.72 25.3333 19.4134 25.1466 18.92 24.8533C18.32 24.4933 17.4934 24 16.0134 24C14.5334 24 13.7067 24.4933 13.0934 24.8533C12.6 25.16 12.3067 25.3333 11.56 25.3333C10.8134 25.3333 10.52 25.16 10.0267 24.8533C9.42669 24.4933 8.60002 24 7.12002 24C5.64002 24 4.81335 24.4933 4.20002 24.8533C3.70669 25.16 3.41335 25.3333 2.66669 25.3333V28C4.14669 28 4.97335 27.5066 5.58669 27.1466C6.08002 26.84 6.38669 26.6666 7.12002 26.6666C7.85335 26.6666 8.16002 26.84 8.65335 27.1466C9.25335 27.5066 10.08 28 11.56 28C13.04 28 13.8667 27.5066 14.48 27.1466C14.9734 26.84 15.2667 26.6666 16.0134 26.6666C16.7467 26.6666 17.0534 26.8533 17.5467 27.1466C18.1467 27.5066 18.9734 28 20.4534 28C21.9334 28 22.7467 27.5066 23.36 27.1466C23.8534 26.84 24.1467 26.6666 24.8934 26.6666C25.6267 26.6666 25.9334 26.8533 26.4267 27.1466C27.0267 27.5066 27.8534 28 29.3334 28V25.3333C28.5867 25.3333 28.2934 25.16 27.8 24.8533C27.2 24.4933 26.3734 24 24.8934 24Z" />
              <path d="M22 10.6667C23.841 10.6667 25.3334 9.17428 25.3334 7.33333C25.3334 5.49238 23.841 4 22 4C20.1591 4 18.6667 5.49238 18.6667 7.33333C18.6667 9.17428 20.1591 10.6667 22 10.6667Z" />
            </svg>
          </div>
          <div className={styles.picto_wrapper}>
            <svg viewBox="0 0 38 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1951 6.2439C25.9122 6.2439 27.3171 4.83902 27.3171 3.12195C27.3171 1.40488 25.9122 0 24.1951 0C22.478 0 21.0732 1.40488 21.0732 3.12195C21.0732 4.83902 22.478 6.2439 24.1951 6.2439ZM7.80488 16.3902C3.43415 16.3902 0 19.8244 0 24.1951C0 28.5659 3.43415 32 7.80488 32C12.1756 32 15.6098 28.5659 15.6098 24.1951C15.6098 19.8244 12.1756 16.3902 7.80488 16.3902ZM7.80488 29.6585C4.83902 29.6585 2.34146 27.161 2.34146 24.1951C2.34146 21.2293 4.83902 18.7317 7.80488 18.7317C10.7707 18.7317 13.2683 21.2293 13.2683 24.1951C13.2683 27.161 10.7707 29.6585 7.80488 29.6585ZM16.8585 14.0488L20.6049 10.3024L21.8537 11.5512C23.8829 13.5805 26.5366 14.8293 29.8146 14.8293V11.7073C27.4732 11.7073 25.6 10.7707 24.1951 9.36585L21.2293 6.4C20.4488 5.77561 19.6683 5.46341 18.7317 5.46341C17.7951 5.46341 17.0146 5.77561 16.5463 6.4L12.1756 10.7707C11.5512 11.3951 11.239 12.1756 11.239 12.9561C11.239 13.8927 11.5512 14.6732 12.1756 15.1415L17.1707 19.5122V27.3171H20.2927V17.639L16.8585 14.0488ZM29.6585 16.3902C25.2878 16.3902 21.8537 19.8244 21.8537 24.1951C21.8537 28.5659 25.2878 32 29.6585 32C34.0293 32 37.4634 28.5659 37.4634 24.1951C37.4634 19.8244 34.0293 16.3902 29.6585 16.3902ZM29.6585 29.6585C26.6927 29.6585 24.1951 27.161 24.1951 24.1951C24.1951 21.2293 26.6927 18.7317 29.6585 18.7317C32.6244 18.7317 35.1219 21.2293 35.1219 24.1951C35.1219 27.161 32.6244 29.6585 29.6585 29.6585Z" />
            </svg>
          </div>
          <div className={styles.picto_wrapper}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.712 20.576L32 18.288L29.712 16L24 21.712L10.288 8L16 2.288L13.712 0L11.424 2.288L9.136 0L5.712 3.424L3.424 1.136L1.136 3.424L3.424 5.712L0 9.136L2.288 11.424L0 13.712L2.288 16L8 10.288L21.712 24L16 29.712L18.288 32L20.576 29.712L22.864 32L26.288 28.576L28.576 30.864L30.864 28.576L28.576 26.288L32 22.864L29.712 20.576Z" />
            </svg>
          </div>
        </div>
        <p>Copyright, Sportsee 2022</p>
      </section>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
