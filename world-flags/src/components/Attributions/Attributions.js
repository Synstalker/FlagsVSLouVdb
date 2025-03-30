import "./Attributions.css";

export default function Attributions() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__attribution">
        OM Challenge All skills and assisted by Hack South and the Tech Community{" "}
        <a
          className="footer__attribution--link"
          href="https://hacksouth.africa/"
          target="_blank"
          rel="noreferrer"
        >
          Getting it done - Right / Fast - SynStalker, CoPilot and Hakware ArchAngel
        </a>
        . Ai and Humans created this {" "}
        <a
          className="footer__attribution--link"
          href="https://hakware.com/"
        >
          Getting it done - Right / Fast - SynStalker, CoPilot and Hakware ArchAngel
        </a>
        .
      </p>
    </footer>
  );
}
