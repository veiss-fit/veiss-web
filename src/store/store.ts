import { create } from "zustand";

interface IStore {
  activeStep: number;
  setActiveStep: (value: number) => void;
  pickedAge: number | null;
  setPickedAge: (value: number) => void;
  pickedGoal: number | null;
  setPickedGoal: (value: number) => void;
  pickedWeight: number | null;
  setPickedWeight: (value: number) => void;
  pickedHeight: number | null;
  setPickedHeight: (value: number) => void;
  btnDisabled: boolean;
  setBtnDisabled: (value: boolean) => void;
  paymentActiveStep: number;
  setPaymentActiveStep: (value: number) => void;
  processActiveStep: number;
  setProcessActiveStep: (value: number) => void;
}

const useStore = create<IStore>((set) => ({
  activeStep: 0,
  setActiveStep: (value: number) => set(() => ({ activeStep: value })),
  pickedAge: null,
  setPickedAge: (value: number) => set(() => ({ pickedAge: value })),
  pickedGoal: null,
  setPickedGoal: (value: number) => set(() => ({ pickedGoal: value })),
  pickedWeight: null,
  setPickedWeight: (value: number) => set(() => ({ pickedWeight: value })),
  pickedHeight: null,
  setPickedHeight: (value: number) => set(() => ({ pickedHeight: value })),
  btnDisabled: true,
  setBtnDisabled: (value: boolean) => set(() => ({ btnDisabled: value })),
  paymentActiveStep: 0,
  setPaymentActiveStep: (value: number) =>
    set(() => ({ paymentActiveStep: value })),
  processActiveStep: 0,
  setProcessActiveStep: (value: number) =>
    set(() => ({ processActiveStep: value })),
}));

export default useStore;
