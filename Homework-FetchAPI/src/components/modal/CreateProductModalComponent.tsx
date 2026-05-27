"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export function CreateProductModalComponent() {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 text-center dark:text-white">
              Create Product
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Product Name</Label>
              </div>
              <TextInput
                id="email"
                placeholder="Product Name"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description">Product Desscription</Label>
              </div>
              <TextInput
                placeholder="Product Description"
                id="description"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <Button>Create Product</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
