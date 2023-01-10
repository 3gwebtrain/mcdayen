
export function TabButton(props: any) {
 
    return (
        <button onClick={props.callback}>{ props.children}</button>
    );
}

export default TabButton;
