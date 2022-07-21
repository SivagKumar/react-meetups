import DrawerAppBar from "./Navbar";

function Layout(props) {
    return (
        <div>
            <DrawerAppBar />
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;