import { Dispatch, SetStateAction } from "react";

export type ModalObject = {
  description: string;
  title: string;
  tags?: string[];
  codeLink?: string;
  projectLink?: string;
};

export type NavLinksProps = {
  links: [string, string][];
  setCurrentLink: Dispatch<SetStateAction<string>>;
  currentLink: string;
};

export interface ModalProps extends ModalObject {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
