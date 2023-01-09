import { NaviLinksProps } from '@mcdayen/prop-types';

export function NaviLinks({ passNaviLinks: { naviLinks, classProps} }: { passNaviLinks: NaviLinksProps }): JSX.Element {
    return (
        <nav className={classProps}>
            {naviLinks.length &&
                naviLinks.map((linkProp) => (
                    <a className='block' key={linkProp.id} aria-labelledby={linkProp.aria} href={linkProp.link}>
                        {linkProp.label}
                    </a>
                ))}
        </nav>
    );
}

export default NaviLinks;
