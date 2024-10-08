"use client"
import { Fab, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { FaArrowUp, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const PREFIX = "SocialIcons";

const classes = {
  icons: `${PREFIX}-icons`,
  messengerIcon: `${PREFIX}-messengerIcon`,
  whatsappIcon: `${PREFIX}-whatsappIcon`,
  toTop: `${PREFIX}-toTop`,
  visible: `${PREFIX}-visible`,
  tiktokIcon: `${PREFIX}-tiktokIcon`,
};

const StyledIconButton = styled(Stack)(({ theme }) => ({
  [`&.${classes.icons}`]: {
    position: "fixed",
    right: 10,
    bottom: 10,
    zIndex: 100
  },
  [`& a`]: {
    margin: theme.spacing(1, 0),
  },
  [`& .${classes.whatsappIcon}`]: {
    backgroundColor: "#25d450",
    color: "#FFF",
    fontSize: "35px",
    cursor: "pointer",
    [`&:hover`]: {
      backgroundColor: "#24ab07",
    },
  },
  [`& .${classes.messengerIcon}`]: {
    backgroundColor: "#2196f3",
    color: "#FFF",
    fontSize: "30px",
    cursor: "pointer",
    [`&:hover`]: {
      backgroundColor: "#0b7acc",
    },
  },
  [`& .${classes.tiktokIcon}`]: {
    backgroundColor: "#000",
    color: "#FFF",
    fontSize: "30px",
    cursor: "pointer",
    [`&:hover`]: {
      backgroundColor: "#0b7acc",
    },
  },
  [`& .${classes.toTop}`]: {
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 1s ease, visibility 0s 0.5s", // Visibility change happens after 1s
    backgroundColor: theme.palette.primary.light,
    color: "#FFF",
    fontSize: "22px",
    cursor: "pointer",
    [`&:hover`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${classes.visible}`]: {
    opacity: 1,
    visibility: "visible",
    transition: "opacity 0.5s ease, visibility 0s", // Visibility change happens immediately
  },
}));

const SocialIcons: React.FC = () => {
  const [shouldShowHeader, setShouldShowHeader] = useState(false);
  const listenToScroll = () => {
    setShouldShowHeader(window.pageYOffset > 300);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <StyledIconButton spacing={2} className={clsx(classes.icons)}>
      <Fab
        className={clsx({ [classes.visible]: shouldShowHeader }, classes.toTop)}
        aria-label="toTop"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </Fab>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        title="mobile"
        href={`tel:+96551108895`}
      >
        <Fab className={classes.messengerIcon} aria-label="messenger">
          <FaPhone />
        </Fab>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        title="whatsApp"
        href={`https://wa.me/+96551108895`}
      >
        <Fab className={classes.whatsappIcon} aria-label="whatsapp">
          <FaWhatsapp />
        </Fab>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        title="Tiktok"
        href={`https://www.tiktok.com/@userid8g1sm327`}
      >
        <Fab className={classes.tiktokIcon} aria-label="whatsapp">
          <FaTiktok />
        </Fab>
      </Link>
    </StyledIconButton>
  );
};

export default SocialIcons;



// <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/about" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/aspagh" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhis" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-sabagh" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/aisbgh-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-sabaagh-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/faniy-sabagh" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mumtaz-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/dikurat-sabagh-lilkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/manazil-sabaagh-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/shaqaq-sabaagh-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-buyut-aitfal" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rusumat-aitfal" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhisat-bi-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/dihanat-alkuayt" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/tarkib-waraq-judran" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/asbagh-abwab-khashabia" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-jabs-burd" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsaalimia" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-sabah-alsaalim" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hawalli" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alahmad" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-khaitan" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfarwaniyah" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aljabriya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshaab" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bayan" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-janoub-alsura" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mishref" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alzahraa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsiddiq" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hateen" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-salwa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuhadaa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-salam" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-masila" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almasayel" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-alhasania" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-subhan" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-ftaira" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-fintas" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak-al-kabeer" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alaqeela" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfntas" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alraqa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-halifa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsabahiya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almanqaf" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almahboula" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-ahmadi" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-khiran" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfhahil" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alwafra" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alali" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-fahad-alahmad" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldaiya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldasma" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldohah" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkhaldiya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrawdah" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrai" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuwaykh" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-asharq" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshamiya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsurra" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqadesiya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqurawan" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfaihaa" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladiliya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsulaybikhat" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-kaifan" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-qurtoba" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-ghranata" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abdullah-al-salim" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-dasman" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bneid-alqar" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnahda" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnuzha" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almansouriya" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mantiqa-al-ashira" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alandalus" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqrean" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkswor" />
//         <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladaan" />

