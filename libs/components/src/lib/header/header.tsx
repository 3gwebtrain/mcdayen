import { ChildProps } from '@mcdayen/prop-types';

export function Header(props: ChildProps): JSX.Element {
    return <header className="flex justify-between relative">{props.children}</header>;
}

export default Header;
