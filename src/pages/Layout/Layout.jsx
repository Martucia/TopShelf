import Header from "../../components/Header/Header.jsx";
import styles from "./Layout.module.sass"
import Notification from "../../components/Notification/Notification.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import Cart from '../../components/Cart/Cart.jsx'
import { mainContext } from '../../utils/context.js'
import Footer from '../../components/Footer/Footer.jsx'
import CreateProductModal from "../../components/CreateProductModal/CreateProductModal.jsx";
import Confirm from "../../components/Confirm/Confirm.jsx";

const Layout = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [addNewProductOpen, setAddNewProductOpen] = useState(false);
    const [isHumburgerActive, setHumburgerActive] = useState(false);
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const [width, setWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <mainContext.Provider value={{ width, setAddNewProductOpen }}>
            <div className={styles.layout}>
                <Notification />
                <Header setNavbarOpen={setNavbarOpen} isHumburgerActive={isHumburgerActive} setHumburgerActive={setHumburgerActive} openCart={() => setCartOpen(true)} />
                {width < 1110
                    ? isHumburgerActive
                        ? <Navbar
                            isHumburgerActive={isHumburgerActive}
                            isOpen={isNavbarOpen}
                            close={() => {
                                setNavbarOpen(false);
                                setTimeout(() => {
                                    setHumburgerActive(false);
                                }, 350);
                            }}
                            isMobile={width < 1100} />
                        : null
                    : <Navbar isMobile={width < 1100} />
                }

                {cartOpen && <Cart close={setCartOpen} />}
                {addNewProductOpen && <CreateProductModal />}

                {children}

                <Footer />
            </div>
        </mainContext.Provider>
    );
}

export default Layout;