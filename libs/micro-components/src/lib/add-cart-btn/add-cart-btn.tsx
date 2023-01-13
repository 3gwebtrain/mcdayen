
export function AddCartBtn({ value, iconUrl }: { value: string, iconUrl: string }) {
    function proceedToCheckOut(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        window.open(iconUrl);
    }
    return (
        <div  className="w-full ml-auto text-center mr-auto">
            <button onClick={proceedToCheckOut} className="bg-black w-full text-sm rounded-full text-white  py-2">{value}</button>
        </div>
    );
}

export default AddCartBtn;
