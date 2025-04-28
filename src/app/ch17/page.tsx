"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="mb-3 text-3xl font-bold">Headless UI</h1>
      <div>
        <h1 className="mb-1 text-xl font-bold">DropDown</h1>
        <Menu>
          <MenuButton className="rounded-md bg-blue-500 px-2 py-1 text-white">
            My Account
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <a className="block data-focus:bg-blue-100" href="/settings">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-focus:bg-blue-100" href="/support">
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-focus:bg-blue-100" href="/license">
                License
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div>
        <h1 className="mb-1 text-xl font-bold">Dialog</h1>
        <button
          className="rounded-md bg-gray-500 px-2 py-1 text-white"
          onClick={() => setIsOpen(true)}
        >
          Open dialog
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border border-gray-100 bg-white p-12 shadow-xl">
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>
              <Description>
                This will permanently deactivate your account
              </Description>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>
              <div className="flex gap-4">
                <button
                  className="rounded-md border-1 border-gray-500 px-2 py-1 text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-red-600 px-2 py-1 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Deactivate
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Home;
