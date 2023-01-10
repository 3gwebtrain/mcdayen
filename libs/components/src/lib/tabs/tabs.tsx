import React, { useEffect } from "react";

export function Tabs(props: any) {
    function communicate() {
        console.log('communicated');
    }

    useEffect(() => {
       React.Children.map(props.children, (child) => {
            return {
                ...child,
                props: {
                    ...child.props,
                    callback:communicate
                }
            }
        })
    },[])
    return (
        <div className="flex gap-2">
            {props.children}
        </div>
    );
}

export default Tabs;
