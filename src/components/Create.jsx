import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Modal, Select } from "antd";
function Create() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="mb-6 flex justify-end">
      <Button type="primary" onClick={showModal}>
        Create
        <AiOutlinePlus />
      </Button>
      <Modal
        title="Please fill in all the boxes"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
      </Modal>
    </div>
  );
}

export default Create;
