import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";

type WalletSelectorProps = {
    items: { label: string; value: string }[];
    placeholder: string;
    handleChange: (selectedWallet: string) => void;
};

const WalletSelector = ({ items, placeholder, handleChange }: WalletSelectorProps) => {
    const [open, setOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<string>();

    useEffect(() => {
        handleChange(selectedWallet);
    }, [selectedWallet])
    
    return (
        <DropDownPicker
            style={{ 
                height: 40, 
                backgroundColor: "rgba(3, 4, 26, 0.7)",
                borderRadius: 0,
            }}
            dropDownDirection="BOTTOM"
            dropDownContainerStyle={{
                borderRadius: 0,
            }}
            value={selectedWallet}
            open={open}
            setOpen={() => {
                setOpen((prevOpen) => !prevOpen);
            }}
            setValue={(newValue) => setSelectedWallet(newValue)}
            placeholder={placeholder}
            items={items}
        />
    )
}

export default WalletSelector;