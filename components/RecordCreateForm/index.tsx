import {
  Button,
  Keyboard,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import WalletSelector  from "../WalletSelector/index";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { Record } from "../../data/mockData";

type RecordCreateFormModalProps = {
  isRecordCreateFormModalVisible: boolean;
  onRecordCreateFormClose: () => void;
  addNewRecord: (newRecord: Record) => void;
  addUserTag: (newTag: string) => void;
  wallets: string[];
  userTags: string[];
};

const RecordCreateFormModal = ({
  isRecordCreateFormModalVisible,
  onRecordCreateFormClose,
  addNewRecord,
  addUserTag,
  userTags,
  wallets,
}: RecordCreateFormModalProps) => {
  const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTagsDDOpen, setIsTagsDDOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [activeValue, setActiveValue] =
    useState<Record["recordType"]>("expense");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const [isCustomTagInputVisible, toggleCustomInputVisible] = useState(false);

  const [customTag, setCustomTag] = useState("");

  const tags = userTags.map((tag) => ({ value: tag, label: tag }));

  const shouldRenderTransferControls = activeValue === "transfer";

 
  const resetInputs = () => {
    setIsOpen(false);
    setIsTagsDDOpen(false);
    setIsSourceOpen(false);
    setIsDestinationOpen(false);
    Keyboard.dismiss();
  };

  const closeDropDowns = () => {
    setIsOpen(false);
    setIsTagsDDOpen(false);
  };

  const onAddRecord = () => {
    addNewRecord({
      amount: +amount,
      walletId: "1",
      tags: activeTags,
      currency: "AMD",
      recordType: activeValue,
      transactionId: Math.random().toString(),
    });
    setAmount("");
    onRecordCreateFormClose();
  };

  useEffect(() => {
    setAmount(amount.replaceAll(/[-,]/g, ""));
    if (amount.split("").filter((val) => val === ".").length > 1) {
      setAmount(amount.substring(0, amount.length - 1));
    }
  }, [amount]);

  return (
    <Modal visible={isRecordCreateFormModalVisible} animationType="slide">
      <Pressable
        onPress={resetInputs}
        style={{ flex: 1, backgroundColor: "#EEEEE5" }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <MaterialIcons
            color="#FFF"
            style={{
              width: 50,
              height: 50,
              backgroundColor: "rgba(68, 68, 68,0.8)",
              borderRadius: 25,
            }}
            name="close"
            size={50}
            onPress={() => onRecordCreateFormClose()}
          />
          <View>
            <Text style={{ fontSize: 40, textAlign: "center" }}>Amount</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              onFocus={() => closeDropDowns()}
              cursorColor="#1777C7"
              style={{
                padding: 20,
                backgroundColor: "rgba(14, 14, 23,0.8)",
                height: 250,
                fontSize: 80,
                color: "#FFF",
              }}
            />
            <View style={{ marginTop: 10, height: 50 }}>
              <Button title="Reset" onPress={() => setAmount("")} />
            </View>
            <View
              style={{
                marginTop: 20,
                paddingVertical: 20,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "48%" }}>
                  <DropDownPicker
                    theme="DARK"
                    style={{
                      borderRadius: 0,
                    }}
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                      borderRadius: 0,
                    }}
                    value={activeValue}
                    open={isOpen}
                    setOpen={() => {
                      resetInputs();
                      setIsOpen(!isOpen);
                    }}
                    setValue={setActiveValue}
                    placeholder="Transaction type"
                    items={[
                      { label: "Expense", value: "expense" },
                      { label: "Income", value: "income" },
                      { label: "Transfer", value: "transfer" },
                    ]}
                  />
                </View>
                <View style={{ width: "48%" }}>
                  <DropDownPicker
                    multiple
                    theme="DARK"
                    style={{ 
                      borderRadius: 0 
                    }}
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                      borderRadius: 0,
                    }}
                    multipleText={activeTags.join(", ")}
                    value={activeTags}
                    open={isTagsDDOpen}
                    setOpen={() => {
                      resetInputs();
                      setIsTagsDDOpen(!isTagsDDOpen);
                    }}
                    setValue={setActiveTags}
                    items={tags}
                    placeholder={"Select Tag"}
                  />
                  {isTagsDDOpen && (
                   <View
                    style={{
                      flexDirection: "row",
                      height: 50,
                      paddingBottom: 10
                    }}
                  >
                  <TextInput
                    value={customTag}
                    onChangeText={setCustomTag}
                    placeholder="add custom tag"
                    placeholderTextColor="rgba(255,255,255, 0.8)"
                    style={{
                      flex: 1,
                      padding: 8,
                      backgroundColor: "rgba(3, 4, 26, 0.7)",
                      height: 40,
                      color: "#FFF"     
                    }}
                  />
                   <Button
                    title="ADD"
                    onPress={() => {
                      if (!customTag) return;
                      addUserTag(customTag);
                      toggleCustomInputVisible(!isCustomTagInputVisible);
                      setCustomTag("");
                    }}
                  />
                </View>
                )}
                </View>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}> 
              <View style={{ width: "48%" }}>
                <WalletSelector
                  open={isSourceOpen}
                  setOpen={() => {
                    resetInputs();
                    setIsSourceOpen(!isSourceOpen);
                  }}
                  items={[
                    { label: 'Cash Wallet', value: 'cashWallet' },
                    { label: 'Card Wallet', value: 'cardWallet' },
                  ]} 
                  placeholder={"Source"}  
                />
              </View>
              {shouldRenderTransferControls && (
                <View style={{ width: "48%" }}>
                  <WalletSelector
                  open={isDestinationOpen}
                  setOpen={() => {
                    resetInputs();
                    setIsDestinationOpen(!isDestinationOpen);
                  }}
                  items={[
                    { label: 'Cash Wallet', value: 'cashWallet' },
                    { label: 'Card Wallet', value: 'cardWallet' },
                  ]} 
                  placeholder={"Destination"}   
                />
                </View>
              )} 
            </View> 
          </View>
          <View style={{ marginTop: 60, height: 50 }}>
            <Button title="Add Record" onPress={onAddRecord} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default RecordCreateFormModal;
