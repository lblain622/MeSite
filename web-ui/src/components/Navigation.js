import { Link } from '@heroui/react';

function Navigation() {
  return (
    <nav className="topbar" aria-label="Primary navigation">
      <Link className="brand" href="#top" aria-label="Home">
        LB
      </Link>
      <div className="nav-links">
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#interests">Interests</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;
