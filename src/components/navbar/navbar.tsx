import React, { useRef } from "react";
import urls from "@/utils/urls";
import { MenuItemLink } from "./components/menu-item/menu-item-link";
import { useAnimateNavbar } from "./components/animate-navbar/animate-navbar";
import { ButtonOrderPopupLoadingWrapper } from "../create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";
import { useAppDispatch } from "@/store/hooks";

import { Logo } from "@/icons/logo/logo";
import { MiniLogo } from "@/icons/logo/mini-logo";

import styles from "./navbar.module.css";
import { MenuItemButton } from "./components/menu-item/menu-item-button";
import { setSidebarState } from "@/store/reducers/generalReducer";

type Props = {
  logoHref?: string;
  noMenuItems?: boolean;
};

export const Navbar = ({ logoHref = "", noMenuItems = false }: Props) => {
  const dispatch = useAppDispatch();
  const navbarRef = useRef<HTMLDivElement>(null);
  useAnimateNavbar({ navbar: navbarRef });
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  // const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
  //   return scrollWidth > clientWidth;
  // };

  const openSidebar = () => {
    dispatch(setSidebarState(true));
  };

  return (
    <header ref={navbarRef} className={styles.navbar_container}>
      <div className={`${styles.navbar_vertical} dynamic_container`}>
        <div className={styles.navbar}>
          <div className={styles.desktop_logo}>
            <Logo href={logoHref ?? urls.base} title="Лого" height={56} prefetch={false} />
          </div>
          <div className={styles.mobile_logo}>
            <MiniLogo href={logoHref ?? urls.base} title="Лого" prefetch={false} />
          </div>
          <nav className={styles.nav_menu}>
            <div className={styles.desktop_container}>
              {!noMenuItems && (
                <ul className={styles.desktop_menu}>
                  <MenuItemLink url={urls.about_us}>О нас</MenuItemLink>
                  <MenuItemButton onClick={openSidebar}>Цены и Услуги</MenuItemButton>
                  <MenuItemLink url={urls.ugolokStudenta.base}>Уголок студента</MenuItemLink>
                </ul>
              )}
              <ButtonOrderPopupLoadingWrapper className={styles.get_price} onClick={() => dispatch(setPopupShown(true))}>
                Узнать цену
              </ButtonOrderPopupLoadingWrapper>
            </div>
          </nav>
        </div>
        {!noMenuItems && (
          <MobileMenu mobileMenuRef={mobileMenuRef}>
            <MenuItemLink url={urls.about_us}>О нас</MenuItemLink>
            <MenuItemButton onClick={openSidebar}>Услуги</MenuItemButton>
            <MenuItemLink url={urls.ugolokStudenta.base}>Уголок студента</MenuItemLink>
          </MobileMenu>
        )}
      </div>
    </header>
  );
};
