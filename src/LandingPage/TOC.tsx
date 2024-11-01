import { Link } from 'react-router-dom';

export default function TOC() {
    return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Labs/Lab4">Lab 4</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
      <li><a id="wd-github" href="https://github.com/PujithaSaiTulasi/kanbas-react-web-app/tree/a4">Github</a></li>
    </ul>
    );
  }
  