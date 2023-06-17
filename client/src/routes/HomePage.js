import { Outlet } from "react-router-dom";


export default function HomePage() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
        <h1>HomePage</h1>
      </div>
    </>
  );
}