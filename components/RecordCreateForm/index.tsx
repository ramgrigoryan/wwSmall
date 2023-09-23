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
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { Record, records } from "../../data/mockData";

type RecordCreateFormModalProps = {
  isRecordCreateFormModalVisible: boolean;
  onRecordCreateFormClose: () => void;
};

const RecordCreateFormModal = ({
  isRecordCreateFormModalVisible,
  onRecordCreateFormClose,
}: RecordCreateFormModalProps) => {
  const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTagsDDOpen, setIsTagsDDOpen] = useState(false);
  const [activeValue, setActiveValue] =
    useState<Record["recordType"]>("expense");
  const [tags, setTags] = useState([
    { label: "Groceries", value: "groceries" },
    { label: "Commute", value: "commute" },
  ]);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const [isCustomTagInputVisible, toggleCustomInputVisible] = useState(false);

  const [customTag, setCustomTag] = useState("");

  const resetInputs = () => {
    setIsOpen(false);
    setIsTagsDDOpen(false);
    Keyboard.dismiss();
  };

  const closeDropDowns = () => {
    setIsOpen(false);
    setIsTagsDDOpen(false);
  };

  console.log({ records });

  const addRecord = () => {
    records.push({
      amount: +amount,
      walletId: "1",
      tags: activeTags,
      currency: "AMD",
      recordType: activeValue,
      transactionId: "U87wQ",
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
    <Modal visible={isRecordCreateFormModalVisible}>
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
            style={{ width: 40 }}
            name="close"
            size={40}
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
                paddingHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row", gap: 15 }}>
                <View>
                  <DropDownPicker
                    theme="DARK"
                    style={{
                      width: 120,
                      borderRadius: 0,
                    }}
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                      width: 200,
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
                <View>
                  <DropDownPicker
                    multiple
                    theme="DARK"
                    style={{ width: 120, borderRadius: 0 }}
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                      width: 200,
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
                </View>
                <View style={{ width: 60 }}>
                  <Button
                    title="New tag"
                    onPress={() =>
                      toggleCustomInputVisible(!isCustomTagInputVisible)
                    }
                  />
                </View>
              </View>
              {isCustomTagInputVisible && (
                <View
                  style={{
                    gap: 10,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    inputMode="numeric"
                    value={customTag}
                    onChangeText={setCustomTag}
                    placeholder="add custom tag"
                    placeholderTextColor="rgba(255,255,255, 0.8)"
                    style={{
                      flex: 1,
                      padding: 10,
                      backgroundColor: "rgba(14, 14, 23, 0.8)",
                      height: 40,
                      color: "#FFF",
                    }}
                  />
                  <Button
                    title="Submit"
                    onPress={() => {
                      if (!customTag) return;

                      setTags([
                        ...tags,
                        {
                          label:
                            customTag[0].toUpperCase() + customTag.substring(1),
                          value: customTag,
                        },
                      ]);
                      toggleCustomInputVisible(!isCustomTagInputVisible);
                      setCustomTag("");
                    }}
                  />
                </View>
              )}
            </View>
          </View>
          <View style={{ marginTop: 20, height: 50 }}>
            <Button title="Add Record" onPress={addRecord} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default RecordCreateFormModal;
