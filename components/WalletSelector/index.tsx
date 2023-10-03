import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

type WalletSelectorProps = {
    items: { label: string; value: string }[];
    placeholder: string;
    open: boolean;
    setOpen: () => void;
};

const WalletSelector = ({ items, placeholder, open, setOpen }: WalletSelectorProps) => {
    const [selectedWallet, setSelectedWallet] = useState<string>();
  
    return (
        <DropDownPicker
            theme="DARK"
            style={{ 
                borderRadius: 0,
            }}
            dropDownDirection="BOTTOM"
            dropDownContainerStyle={{
                borderRadius: 0,
            }}
            value={selectedWallet}
            open={open}
            setOpen={setOpen}
            setValue={(newValue) => setSelectedWallet(newValue)}
            placeholder={placeholder}
            items={items}
        />
    )
}

export default WalletSelector;