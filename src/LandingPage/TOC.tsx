import { Link } from 'react-router-dom';

export default function TOC() {
    return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Labs/Lab4">Lab 4</Link></li>
      <li><Link to="/Labs/Lab5">Lab 5</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
      <li><a id="wd-github" href="https://github.com/PujithaSaiTulasi/kanbas-react-web-app/tree/a5">Github</a></li>
      <li><a id="wd-render" href="https://kanbas-node-server-app-z71u-872075d62c77.herokuapp.com/">Heroku</a></li>
     
    </ul>
    );
  }
  