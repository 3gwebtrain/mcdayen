import { NaviLinkProps } from '@mcdayen/prop-types';

export function NaviLinks({ naviLinks }: { naviLinks: NaviLinkProps[] }): JSX.Element {
    return (
        <nav className="flex gap-4">
            {naviLinks.length &&
                naviLinks.map((linkProp) => (
                    <a key={linkProp.id} aria-labelledby={linkProp.aria} href={linkProp.link}>
                        {linkProp.label}
                    </a>
                ))}
        </nav>
    );
}

export default NaviLinks;
