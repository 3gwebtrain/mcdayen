import { MenuHandlerProps } from "@mcdayen/prop-types";

export function MobileMenu({menuHandler}:MenuHandlerProps) {
    function showMenu() {
        menuHandler();
    }
    return (
        <img onClick={showMenu} className="lg:hidden" alt="click to search" width={'20px'} src="/assets/icons/icon-mobile-menu.svg" />
    );
}

export default MobileMenu;
