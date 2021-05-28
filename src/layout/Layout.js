import Navigation from "../components/Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className=" bg-gradient-to-br from-black to-gray-900 min-h-screen">
        <div className="content text-white">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
