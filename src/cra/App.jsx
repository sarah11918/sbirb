import { Routes, Route, Outlet, Link } from "react-router-dom";
import Test from '../birdapp/Test';
import Recently from '../birdapp/Recently';
import Unusual from '../birdapp/Unusual';
import RegionID from '../birdapp/RegionID';

export default function App() {
  
  return (
   
    <div>
      <h1>sBirb</h1>

      <p>
        This is a simple web app I built using the eBird API to check the status of rare/unusual bird sightings. Over time, I added more data searches that helped me when I was observing birds.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recent" element={<Recently />} />
          <Route path="unusual" element={<Unusual />} />
          <Route path="region" element={<RegionID />} />
          <Route path="test" element={<Test />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>

  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recent">Recently Seen</Link>
          </li>
          <li>
            <Link to="/unusual">Rare or Unusual</Link>
          </li>
          <li>
            <Link to="/region">Find a location's eBird Region ID code</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
